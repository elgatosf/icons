import { Api } from "figma-api";
import { setTimeout } from "timers/promises";

const DEBUG_MAX_DOWNLOAD_COUNT: number | undefined = undefined;
const BATCH_SIZE = 5;
const RETRY_MAX_COUNT = 5;
const RETRY_THROTTLE = 1000;

/**
 * Client for interacting with Figma files via the Figma API.
 */
export class FigmaFileClient {
	/**
	 * Underlying API connected to Figma.
	 */
	readonly api: Api;

	/**
	 * File key the client is for.
	 */
	readonly fileKey: string;

	/**
	 * Initializes a new instance of the {@link FigmaFileClient}.
	 * @param personalAccessToken Authorized token used to communicate with Figma.
	 * @param fileKey File key.
	 */
	constructor(personalAccessToken: string, fileKey: string) {
		this.api = new Api({ personalAccessToken });
		this.fileKey = fileKey;
	}

	/**
	 * Gets the file from Figma.
	 * @returns The file.
	 */
	public getFile(): ReturnType<Api["getFile"]> {
		return this.api.getFile({ file_key: this.fileKey });
	}

	/**
	 * Gets the SVG contents for the specified images
	 * @param nodeIds Node identifiers of the images.
	 * @returns The SVG images.
	 */
	public async *getSvgImages(nodeIds: string[]): AsyncGenerator<SvgImage> {
		let count = 0;
		let batch: RenderedImage[] = [];

		// Iterate over each rendered image, and download them in batches.
		for await (const image of this.#getSvgImageDownloadLinks(nodeIds)) {
			batch.push(image);
			if (batch.length >= BATCH_SIZE) {
				for (const svg of await Promise.all(batch.map((img) => this.#downloadSvgImage(img)))) {
					yield svg;
				}

				batch.length = 0;
			}

			if (DEBUG_MAX_DOWNLOAD_COUNT !== undefined && ++count > DEBUG_MAX_DOWNLOAD_COUNT) {
				break;
			}
		}

		// Finish downloading any remaining items.
		if (batch.length) {
			for (const svg of await Promise.all(batch.map((img) => this.#downloadSvgImage(img)))) {
				yield svg;
			}
		}
	}

	/**
	 * Downloads the rendered image.
	 * @param image Image to download.
	 * @returns SVG image.
	 */
	async #downloadSvgImage(image: RenderedImage): Promise<SvgImage> {
		const res = await this.#withRetry(() => fetch(image.downloadUrl!));
		if (!res.ok) {
			throw new Error(`Failed to download ${image.nodeId} from ${image.downloadUrl}: Status ${res.status}`);
		}

		const contents = await res.text();
		if (!contents.startsWith("<svg")) {
			throw new Error(`Failed to download ${image.nodeId} from ${image.downloadUrl}: Invalid contents\n${contents}`);
		}

		return Promise.resolve({
			contents,
			nodeId: image.nodeId,
		});
	}

	/**
	 * Gets the download links for the specified images.
	 * @param nodeIds Node identifiers of the images.
	 * @returns Download links.
	 */
	async *#getSvgImageDownloadLinks(nodeIds: string[]): AsyncGenerator<RenderedImage> {
		for (let i = 0; i < nodeIds.length; i += BATCH_SIZE) {
			// Generate the download links for a patch.
			const res = await this.#withRetry(() => {
				return this.api.getImages(
					{
						file_key: this.fileKey,
					},
					{
						ids: nodeIds.slice(i, i + BATCH_SIZE).join(","),
						format: "svg",
					},
				);
			});

			// Yield each download link.
			for (const [nodeId, downloadUrl] of Object.entries(res.images)) {
				yield { nodeId, downloadUrl };
			}
		}
	}

	/**
	 * Executes the specified function with a retry policy.
	 * @param fn Function to execute.
	 * @returns Result of the function.
	 */
	async #withRetry<T>(fn: () => Promise<T>): Promise<T> {
		let retries = 0;
		while (true) {
			try {
				return await fn();
			} catch (err) {
				if (++retries >= RETRY_MAX_COUNT || err?.response?.status !== 429) {
					throw err;
				}

				const delay = RETRY_THROTTLE * Math.pow(2, retries);
				await setTimeout(delay);
			}
		}
	}
}

/**
 * Rendered image, available remotely.
 */
type RenderedImage = {
	/**
	 * URL where the image can be downloaded.
	 */
	downloadUrl: string | null;

	/**
	 * Node of the image.
	 */
	nodeId: string;
};

/**
 * An SVG rendered image.
 */
export type SvgImage = {
	/**
	 * SVG contents.
	 */
	contents: string;

	/**
	 * Node of the image.
	 */
	nodeId: string;
};
