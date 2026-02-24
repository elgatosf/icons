import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import ora from "ora";
import svgtofont from "svgtofont";

const root = join(import.meta.dirname, "..");
const fontDir = join(root, "font");
const fontName = "elgato-icons";

// Generate font files
const status = ora("Generating font from large SVGs…").start();

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

status.succeed("Font generated → font/");

// Generate CSS file from info.json
const cssStatus = ora("Generating CSS…").start();

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

await writeFile(join(fontDir, `${fontName}.css`), lines.join("\n"), "utf8");

cssStatus.succeed("CSS generated → font/elgato-icons.css");
