import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
// @ts-ignore - No types available for oslllo-svg-fixer
import SVGFixer from "oslllo-svg-fixer";
import svgtofont from "svgtofont";

import type { SvgIcon, Transformer } from "../transformer.ts";
import * as utils from "../utils.ts";
import { generateCSharpConstants } from "./font-csharp.ts";
import { parseIconInfo } from "./font-parser.ts";
import { generateXamlResourceDictionary } from "./font-xaml.ts";

const fontName = "elgato-icons";

/**
 * Transformer that generates an icon font and accompanying CSS from all SVG icon sizes (l, m, s).
 * Icons are named with a size suffix (e.g. `accessibility-l`, `accessibility-m`) to avoid collisions.
 */
export class FontTransformer implements Transformer {
	/** @inheritdoc */
	public readonly name = "Icon font";

	/**
	 * Collected icons and their sizes for font generation.
	 */
	#icons: SvgIcon[] = [];

	/** @inheritdoc */
	public transform(icon: SvgIcon): void {
		this.#icons.push(icon);
	}

	/** @inheritdoc */
	public async finalize(): Promise<void> {
		const svgDir = join(tmpdir(), `elgato-icons-svg-${Date.now()}`);
		const fixedDir = join(tmpdir(), `elgato-icons-fixed-${Date.now()}`);

		try {
			// Create the temp directory for the combined SVGs.
			await fs.mkdir(svgDir, { recursive: true });

			// Write each icon size as a separate SVG file with a size suffix.
			for (const icon of this.#icons) {
				for (const [size, { svg }] of icon.sizes) {
					const filename = `${icon.name}-${size}.svg`;
					await fs.writeFile(join(svgDir, filename), svg, "utf8");
				}
			}

			// Fix SVG strokes to fills (required for correct font rendering), then generate the font.
			await SVGFixer(svgDir, fixedDir, { throwIfDestinationDoesNotExist: false }).fix();

			await svgtofont({
				src: fixedDir,
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
					centerHorizontally: true,
					centerVertically: true,
					normalize: true,
					preserveAspectRatio: true,
				},
				website: undefined,
			});

			// Generate XAML ResourceDictionary and C# constants from the info.json
			const parsedEntries = await parseIconInfo();
			await generateXamlResourceDictionary(parsedEntries);
			await generateCSharpConstants(parsedEntries);
		} finally {
			await fs.rm(svgDir, { recursive: true, force: true });
			await fs.rm(fixedDir, { recursive: true, force: true });
		}
	}
}
