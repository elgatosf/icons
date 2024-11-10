/**
 * Options that define how SVGs should be converted using SVGR.
 * @link https://react-svgr.com/docs/options/
 */
module.exports = {
	icon: true,
	expandProps: true,
	typescript: true,
	removeViewBox: false,
	replaceAttrValues: {
		"#151515": "currentColor",
	},
	dimensions: false,
	svgProps: {
		width: "{size}",
		height: "{size}",
		// className: '{classes}',
		"aria-label": "{label}",
		role: "img",
	},
	prettier: false,
};
