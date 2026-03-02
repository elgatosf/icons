import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
// @ts-ignore - No types available for oslllo-svg-fixer
import SVGFixer from "oslllo-svg-fixer";
import svgtofont from "svgtofont";

import type { SvgIcon, Transformer } from "../transformer.ts";
import * as utils from "../utils.ts";

const fontName = "elgato-icons";

/**
 * Transformer that generates an icon font and accompanying CSS from the large (l) SVG icons.
 */
export class FontTransformer implements Transformer {
	/** @inheritdoc */
	public readonly name = "Icon font";

	/** @inheritdoc */
	public async finalize(): Promise<void> {
		const tmpDir = join(tmpdir(), `elgato-icons-${Date.now()}`);
		const svgSrc = join(utils.resolve("."), "svg", "l");

		try {
			// Fix SVG strokes to fills (required for correct font rendering), then generate the font.
			await SVGFixer(svgSrc, tmpDir, { throwIfDestinationDoesNotExist: false }).fix();

			await svgtofont({
				src: tmpDir,
				dist: utils.resolve("font"),
				css: { fontSize: "16px", hasTimestamp: false, include: /\.css$/ },
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
					fontHeight: 1024,
					descent: 64,
					normalize: true,
					centerHorizontally: true,
					centerVertically: true,
				},
				website: undefined,
			});
		} finally {
			await fs.rm(tmpDir, { recursive: true, force: true });
		}
	}

	/** @inheritdoc */
	public transform(_icon: SvgIcon): void {
		// Font generation is handled in finalize().
	}
}
