/**
 * The npm-run scripts are executed using `--experimental-strip-types`; this flag does not transform
 * file extensions, which means that if we were to reference `./src/metadata/index.ts` it's imports
 * would fail as the JavaScript files do not exist. Instead, we wrap the build output and re-export.
 */
export * as metadata from "../../dist/metadata/index.js";
