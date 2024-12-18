import { Api } from "figma-api";
import { join } from "node:path";

import type { IconMetadata } from "./metadata";

const BATCH_SIZE = 3;

/**
 * Downloads all icons.
 * @param ctx The context that contains information about what icons to download.
 */
export async function download(ctx: DownloadContext): Promise<void> {
	const { icons } = ctx;
	for await (const images of getDownloadLinks(ctx)) {
		await Promise.all(images.map(getDownloader(icons)));
		return; // TODO: remove
	}
}

/**
 * Gets a function that can download and process an icon.
 * @param icons Metadata collection of icons.
 * @returns Download function.
 */
function getDownloader(icons: Map<string, IconMetadata>): (image: IconDownloadLink) => Promise<void> {
	return async (image: IconDownloadLink) => {
		const icon = icons.get(image.id);
		if (icon === undefined) {
			throw new Error(`Failed to download icon ${image.id}: cannot find metadata`);
		}

		if (image.url === null) {
			throw new Error(`Failed to download icon ${image.id}: null url`);
		}

		const res = await fetch(image.url);
		if (!res.ok) {
			throw new Error(`Failed to download icon ${image.id}: ${res.status} ${res.statusText}`);
		}

		const svg = await res.text();
		// TODO: format SVG
		// TODO: ensure fill/stroke are `currentColor`.
		console.log(svg);
	};
}

/**
 * Gets the download links for each icon, in batches.
 * @param ctx The download context.
 * @returns Links for downloading the icons as SVGs.
 */
async function* getDownloadLinks({ client, fileKey, icons }: DownloadContext): AsyncGenerator<IconDownloadLink[]> {
	const ids = Array.from(icons.keys());
	for (let i = 0; i < ids.length; i += BATCH_SIZE) {
		const { images } = await client.getImages(
			{
				file_key: fileKey,
			},
			{
				ids: ids.slice(i, i + BATCH_SIZE).join(","),
				format: "svg",
			},
		);

		yield Object.entries(images).map(([id, url]) => ({ id, url }));
		process.exit(0);
	}
}

const SIZE_FOLDERS = {
	s: join(import.meta.dirname, "../../svg/16"),
	m: join(import.meta.dirname, "../../svg/20"),
	l: join(import.meta.dirname, "../../svg/24"),
} as const;

/**
 * Gets the local file path for an icon.
 * @param icon The icon.
 * @returns Local file path.
 */
function getPath(icon: IconMetadata): string {
	if (icon.size in SIZE_FOLDERS) {
		return join(SIZE_FOLDERS[icon.size], `${icon.name}.svg`);
	}

	throw new Error(`Unknown folder size "${icon.size}" for ${icon.name}`);
}

/**
 * Link to download an icon in SVG format.
 */
type IconDownloadLink = {
	/**
	 * Node identifier of the icon.
	 */
	id: string;

	/**
	 * Url where the icon can be downloaded from.
	 */
	url: string | null;
};

/**
 * Context of icons being downloaded.
 */
type DownloadContext = {
	/**
	 * Authorized figma client.
	 */
	client: Api;

	/**
	 * File key of the document the icons are within.
	 */
	fileKey: string;

	/**
	 * Icons to download.
	 */
	icons: Map<string, IconMetadata>;
};
