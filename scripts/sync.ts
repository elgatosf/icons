import * as dotenv from "dotenv";
import ora from "ora";

import { FigmaFileClient } from "./figma/figma-client.ts";
import { writeSvgFile } from "./figma/file-writer.ts";
import { findIcons } from "./figma/find.ts";

// Configure the environment.
dotenv.config();
const { FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY } = process.env;

if (FIGMA_ACCESS_TOKEN === undefined) {
	throw new Error("Missing environment variable: FIGMA_ACCESS_TOKEN");
}

if (FIGMA_FILE_KEY === undefined) {
	throw new Error("Missing environment variable: FIGMA_FILE_KEY");
}

const figmaClient = new FigmaFileClient(FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY);

// Get the Figma file and icons.
const file = await figmaClient.getFile();
const icons = findIcons(file.document);

const status = ora();
let count = 0;
status.start("Preparing...");

// Download and process the SVG images.
for await (const { nodeId, contents } of figmaClient.getSvgImages(Array.from(icons.keys()))) {
	const metadata = icons.get(nodeId);
	if (!metadata) {
		throw new Error(`Unknown icon for nodeId: ${nodeId}`);
	}

	await writeSvgFile(metadata, contents);
	status.text = `Downloading... ${++count} / ${icons.size}`;
}

status.suffixText = "";
status.succeed(`${icons.size} icons downloaded`);
