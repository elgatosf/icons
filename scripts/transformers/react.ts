import { type Config, transform } from "@svgr/core";
import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";

import { getReactMetadata } from "../../src/metadata/providers.ts";
import type { Size } from "../../src/metadata/sizing.ts";
import type { SvgIcon, Transformer } from "../transformer.ts";
import * as utils from "../utils.ts";

const svgrConfig: Config = {
	dimensions: false,
	expandProps: true,
	icon: true,
	jsx: {
		babelConfig: {
			compact: false,
		},
	},
	prettier: false,
	plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
	replaceAttrValues: {
		"#151515": "currentColor",
	},
	svgo: true,
	svgProps: {
		width: "{size}",
		height: "{size}",
		"aria-label": "{label}",
		role: "img",
	},
	typescript: true,
};

/**
 * Transformer that generates aggregated React components of icons and their supported sizes.
 */
export class ReactTransformer implements Transformer {
	/**
	 * @inheritdoc
	 */
	public readonly name = "React components";

	/**
	 * Contents of the components index file.
	 */
	#indexContents = "";

	/**
	 * @inheritdoc
	 */
	public finalize(): Promise<void> {
		return utils.writeGeneratedFile("src/react/icons/index.ts", this.#indexContents);
	}

	/**
	 * @inheritdoc
	 */
	public async initialize(): Promise<void> {
		// Clean up the old icons.
		const dir = utils.resolve("src/react/icons");
		if (existsSync(dir)) {
			await rm(dir, { recursive: true });
		}
	}

	/**
	 * @inheritdoc
	 */
	public async transform(icon: SvgIcon): Promise<void> {
		// Convert each size to a JSX element.
		const sizes = new Map<Size, string>();
		for (const [size, { svg }] of icon.sizes) {
			const component = await transform(svg, svgrConfig);
			const [, tsx] = component.match(/(<svg(.*)<\/svg>);/) ?? [];
			if (!tsx) {
				throw new Error(`Failed to parse element from SVGR conversion: ${icon.name}`);
			}

			sizes.set(size, tsx);
		}

		// Write all sizes of the icon as a single component.
		const { componentName, filename } = getReactMetadata(icon.name);
		const elementOrSwitch = this.#reduceSizes(sizes);

		await utils.writeGeneratedFile(
			`src/react/icons/${filename}.tsx`,
			this.#formatComponent(componentName, icon.name, elementOrSwitch),
		);

		this.#indexContents += `export { default as ${componentName} } from "./${filename}.g.js";\n`;
	}

	/**
	 * Reduces the specified sizes to code that represents either a single element, or switch statement.
	 * @param sizes Sizes of the icons.
	 * @returns Code that represents the icon sizes.
	 */
	#reduceSizes(sizes: Map<Size, string>): string {
		if (sizes.size > 3 || sizes.size === 0) {
			throw new Error(`Unable to aggregate sizes; expected "s", "m", and/or "l" only.`);
		}

		// Order the icon sizes.
		const order = ["m", "s", "l"];
		const orderedSizes = Array.from(sizes.entries())
			.sort(([a], [b]) => order.indexOf(a) - order.indexOf(b))
			.map(([size, tsx]) => ({ size, tsx }));

		// When there is only one size, simply return the element.
		if (orderedSizes.length === 1) {
			return `return ${orderedSizes[0].tsx};`;
		}

		// With multiple sizes, build a switch statement.
		let switchStatement = "switch (props?.size) {\n";
		for (let i = orderedSizes.length - 1; i--; i >= 0) {
			if (i > 0) {
				switchStatement += `case "${orderedSizes[i].size}": return ${orderedSizes[i].tsx};\n`;
			} else {
				switchStatement += `default: return ${orderedSizes[i].tsx};\n`;
			}
		}

		return switchStatement + "};\n";
	}

	/**
	 * Formats the icon to a React component.
	 * @param componentName Name of the component.
	 * @param iconName Name of the icon.
	 * @param elementOrSwitch Element, or switch statement of the icon sizes.
	 * @returns React component as a string.
	 */
	#formatComponent(componentName: string, iconName: string, elementOrSwitch: string): string {
		return ` 
import type { SVGProps } from "react"
import { sizeMap } from "../../metadata/sizing.js"
import type { IconProps } from "../types.js"

const ${componentName} = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"]
	const label = props?.label ?? "Icon"
	
	${elementOrSwitch}
};

${componentName}.iconName = "${iconName}";

export default ${componentName};`;
	}
}
