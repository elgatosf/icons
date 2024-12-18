import type { Size } from "./sizing.js";

export interface IconMetadata {
	name: string;
	exportName: string;
	sizes: Map<Size, { svg: string }>;
}

export interface IconSet {
	[key: string]: IconMetadata;
} 