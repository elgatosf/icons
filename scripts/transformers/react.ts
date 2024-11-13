import { type Config, transform } from "@svgr/core";

import type { Size } from "../../src/catalogue/index.ts";
import { type SvgIcon, Transformer, type TransformerContext } from "../transformer.ts";

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
export class ReactTransformer extends Transformer {
	/**
	 * @inheritdoc
	 */
	public name = "React components";

	/**
	 * Contents of the components index file.
	 */
	#indexContents = "";

	/**
	 * @inheritdoc
	 */
	public override finalize(ctx: TransformerContext): Promise<void> {
		return ctx.write("src/react/icons/index.ts", this.#indexContents);
	}

	/**
	 * @inheritdoc
	 */
	public override async transform(ctx: TransformerContext, icon: SvgIcon): Promise<void> {
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
		const componentName = icon.exportName.charAt(0).toUpperCase() + icon.exportName.slice(1);
		const filename = componentName.slice(4);
		const elementOrSwitch = this.#reduceSizes(sizes);

		await ctx.write(`src/react/icons/${filename}.tsx`, this.#formatComponent(componentName, elementOrSwitch));
		this.#indexContents += `export { default as ${componentName} } from "./${filename}.js";\n`;
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
	 * @param name Name of the component.
	 * @param elementOrSwitch Element, or switch statement of the icon sizes.
	 * @returns React component as a string.
	 */
	#formatComponent(name: string, elementOrSwitch: string): string {
		return `
/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
    
import type { SVGProps } from "react"
import { sizeMap } from "../../catalogue/sizing.js"
import type { IconProps } from "../types.js"

const ${name} = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"]
	const label = props?.label ?? "Icon"
	
	${elementOrSwitch}
};

export default ${name};`;
	}
}
