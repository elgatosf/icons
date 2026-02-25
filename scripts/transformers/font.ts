import { readFile } from "node:fs/promises";
import { join } from "node:path";
import svgtofont from "svgtofont";

import type { SvgIcon, Transformer } from "../transformer.ts";
import * as utils from "../utils.ts";

const fontName = "elgato-icons";

/**
 * Transformer that generates an icon font and accompanying CSS from the large (l) SVG icons.
 */
export class FontTransformer implements Transformer {
	/**
	 * @inheritdoc
	 */
	public readonly name = "Icon font";

	/**
	 * @inheritdoc
	 */
	public async finalize(): Promise<void> {
		const root = utils.resolve(".");
		const fontDir = utils.resolve("font");

		// Generate font files from the large SVGs.
		await svgtofont({
			src: join(root, "svg", "l"),
			dist: fontDir,
			fontName,
			css: false,
			outSVGReact: false,
			outSVGReactNative: false,
			outSVGVue: false,
			outSVGPath: false,
			generateInfoData: true,
			emptyDist: true,
			typescript: false,
			log: false,
			excludeFormat: ["eot", "svg", "symbol.svg"],
			svgicons2svgfont: {
				fontHeight: 1000,
				normalize: true,
				centerHorizontally: true,
			},
			website: undefined,
		});

		// Generate CSS file from the info.json glyph mapping.
		const info: Record<string, { encodedCode: string; className: string }> = JSON.parse(
			await readFile(join(fontDir, "info.json"), "utf8"),
		);

		const lines = [
			`@font-face {`,
			`  font-family: "${fontName}";`,
			`  src: url("./${fontName}.woff2") format("woff2"),`,
			`       url("./${fontName}.woff") format("woff"),`,
			`       url("./${fontName}.ttf") format("truetype");`,
			`  font-weight: normal;`,
			`  font-style: normal;`,
			`}`,
			``,
			`[class^="${fontName}-"],`,
			`[class*=" ${fontName}-"] {`,
			`  font-family: "${fontName}" !important;`,
			`  font-style: normal;`,
			`  font-weight: normal;`,
			`  font-variant: normal;`,
			`  text-transform: none;`,
			`  line-height: 1;`,
			`  -webkit-font-smoothing: antialiased;`,
			`  -moz-osx-font-smoothing: grayscale;`,
			`}`,
			``,
		];

		for (const [, { encodedCode, className }] of Object.entries(info)) {
			lines.push(`.${className}::before { content: "${encodedCode}"; }`);
		}

		lines.push(``);

		await utils.writeFile(join(fontDir, `${fontName}.css`), lines.join("\n"));
	}

	/**
	 * @inheritdoc
	 */
	public transform(_icon: SvgIcon): void {
		// Font generation is handled in finalize() using svgtofont directly against the svg/l directory.
	}
}
