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
		try {
			const root = utils.resolve(".");
			const fontDir = utils.resolve("font");

			// Generate font files from the large SVGs.
			await svgtofont({
				src: join(root, "svg", "l"),
				dist: fontDir,
				css: {
					fontSize: "16px",
					hasTimestamp: false,
					include: /\.css$/,
				},
				fontName,
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
		} catch (error) {
			console.error("Error generating font:", error);
		}
	}

	/**
	 * @inheritdoc
	 */
	public transform(_icon: SvgIcon): void {
		// Font generation is handled in finalize() using svgtofont directly against the svg/l directory.
	}
}
