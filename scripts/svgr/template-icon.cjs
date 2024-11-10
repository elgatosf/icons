/**
 * Custom template that outputs an icon component.
 * @link https://react-svgr.com/docs/custom-templates/#custom-component-template
 * @param {object} variables All pre-compiled variables by SVGR.
 * @param {object} context Context of the template.
 * @returns The template.
 */
module.exports = (variables, { tpl }) => {
	const name = `Icon${variables.componentName.replace("Svg", "")}`;
	return tpl`
/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
    
import type { SVGProps } from 'react'
import type { IconProps } from '../types'

const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
}

${variables.interfaces};

const ${name} = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || 'm'
	const size = SIZE_MAP[sizeName]
	const label = props.label ?? 'Icon'
	switch (sizeName) {
		// case 's':
		// case 'm':
		// case 'l':
		default:
			return ${variables.jsx}
	}
};

export default ${name}
`;
};
