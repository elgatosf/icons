import { mkdir } from "node:fs/promises";
import { join } from "node:path";

export interface SvgIcon {
	name: string;
	exportName?: string;
	sizes: Map<string, { svg: string }>;
}

export interface Transformer {
	name: string;
	initialize?(ctx: TransformerContext): Promise<void>;
	transform(ctx: TransformerContext, icon: SvgIcon): Promise<void>;
	finalize?(ctx: TransformerContext): Promise<void>;
}

export class TransformerContext {
	readonly outDir: string;
	readonly srcDir: string;
	readonly icons: SvgIcon[] = [];

	constructor() {
		this.outDir = join(process.cwd(), "dist");
		this.srcDir = join(process.cwd(), "src");
	}

	async initialize(): Promise<void> {
		// Create source directories
		await Promise.all([
			mkdir(join(this.srcDir, "react"), { recursive: true }),
			mkdir(join(this.srcDir, "strings"), { recursive: true }),
			mkdir(join(this.srcDir, "metadata"), { recursive: true }),
			mkdir(join(this.srcDir, "strings/s"), { recursive: true }),
			mkdir(join(this.srcDir, "strings/m"), { recursive: true }),
			mkdir(join(this.srcDir, "strings/l"), { recursive: true })
		]);

		// Create output directories
		await Promise.all([
			mkdir(join(this.outDir, "react"), { recursive: true }),
			mkdir(join(this.outDir, "strings"), { recursive: true }),
			mkdir(join(this.outDir, "metadata"), { recursive: true }),
			mkdir(join(this.outDir, "strings/s"), { recursive: true }),
			mkdir(join(this.outDir, "strings/m"), { recursive: true }),
			mkdir(join(this.outDir, "strings/l"), { recursive: true })
		]);
	}

	addIcon(icon: SvgIcon): void {
		// Only add if not already present
		if (!this.icons.some(i => i.name === icon.name)) {
			this.icons.push(icon);
		}
	}
}
