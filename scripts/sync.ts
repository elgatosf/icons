import * as dotenv from "dotenv";
import { Api } from "figma-api";

import { download } from "./figma/download.ts";
import { getIconMetadata } from "./figma/metadata.ts";

// Prepare the environment.
dotenv.config();
const { FIGMA_ACCESS_TOKEN, FIGMA_FILE_ID } = process.env;
if (FIGMA_ACCESS_TOKEN === undefined) {
	throw new Error("Missing environment variable: FIGMA_ACCESS_TOKEN");
}

if (FIGMA_FILE_ID === undefined) {
	throw new Error("Missing environment variable: FIGMA_FILE_ID");
}

const figmaClient = new Api({
	personalAccessToken: FIGMA_ACCESS_TOKEN!,
});

// Get the Figma file, find the icons, and then download them.
const figmaFile = await figmaClient.getFile({ file_key: FIGMA_FILE_ID });
const icons = getIconMetadata(figmaFile.document);

await download({
	client: figmaClient,
	fileKey: FIGMA_FILE_ID,
	icons,
});

export {};
