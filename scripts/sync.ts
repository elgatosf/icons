import { fileClient } from "./figma/file-client.ts";
import { findIcons } from "./figma/find.ts";

// Get the Figma file and icons.
const file = await fileClient.getFile();
const icons = findIcons(file.document);

// Download and process the SVG images.
for await (const svg of fileClient.getSvgImages(Array.from(icons.keys()))) {
	// TODO: process and save
	console.log(svg);
}
