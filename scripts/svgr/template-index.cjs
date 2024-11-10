const path = require("path");

/**
 * Custom template that outputs an index file.
 * @link https://react-svgr.com/docs/custom-templates/#custom-index-template
 * @param {string[]} filePaths Original file's path
 * @returns The template.
 */
module.exports = (filePaths) => {
	const exportEntries = filePaths.map((entry) => {
		const basename = path.basename(entry.path, path.extname(entry.path));
		const exportName = /^\d/.test(basename) ? `${basename}` : basename;

		return `export { default as Icon${exportName} } from './${basename}.js';`;
	});

	return exportEntries.join("\n");
};
