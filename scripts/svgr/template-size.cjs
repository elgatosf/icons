/**
 * Custom template that outputs just the JSX of the conversion.
 * @link https://react-svgr.com/docs/custom-templates/#custom-component-template
 * @param {object} variables All pre-compiled variables by SVGR.
 * @param {object} context Context of the template.
 * @returns The template.
 */
module.exports = (variables, { tpl }) => {
	return tpl`
  		${variables.jsx}
  	`;
};
