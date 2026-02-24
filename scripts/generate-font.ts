import { join } from "node:path";
import ora from "ora";
import svgtofont from "svgtofont";

const status = ora("Generating font from large SVGs…").start();

const root = join(import.meta.dirname, "..");

await svgtofont({
	src: join(root, "svg", "l"),
	dist: join(root, "font"),
	fontName: "elgato-icons",
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

status.succeed("Font generated → font/");
