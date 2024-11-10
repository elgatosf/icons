/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types.js";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconLogoCorsair = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || "m";
	const size = SIZE_MAP[sizeName];
	const label = props.label ?? "Icon";
	switch (sizeName) {
		// case 's':
		// case 'm':
		// case 'l':
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M14.269 6.747c.305-1.394-1.345-4.744-1.345-4.744L12.922 2c8.484 5.33 6.128 8.433 6.128 8.433-.478-2.292-4.781-3.686-4.781-3.686m-2.264 2.61c-.198-.813-.387-1.594-.738-2.329h.003L8.45 5.157S9.9 7.423 9.673 8.913l2.452.932zm-5.09-.021c.271.715.58 1.613.743 2.388l-2.212-.55c.227-1.49-1.174-3.289-1.174-3.289L6.915 9.34zm4.822-3.578-.003-.002v-.003z" />
					<path d="M11.737 5.758a12.16 12.16 0 0 1 1.567 4.959 12.16 12.16 0 0 1-1.428 6.936c.511-1.763.697-3.694.511-5.684l-.007-.09q-.013-.194-.037-.385L7.607 8.34c.531 1.19.87 2.485.999 3.85a12.17 12.17 0 0 1-1.128 6.34c.407-1.62.537-3.368.369-5.167l-.01-.105-.008-.104-4.432-2.35a9.9 9.9 0 0 1 .929 3.393c.276 2.94-.764 5.668-2.68 7.803 18.909-8.015 19.667-2.736 19.667-2.736s1.428-1.87.937-3.89c-.644-2.665-10.334-9.49-10.513-9.616" />
				</svg>
			);
	}
};
export default IconLogoCorsair;
