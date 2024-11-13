import type * as Icons from "./icons/index.js";

export type { Size } from "../catalogue/sizing.js";
export * from "./icons/index.js";
export * from "./types.js";

export type Icon = keyof typeof Icons;
