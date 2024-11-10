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
const IconViewOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-3.797 3.798c1.825 1.347 3.085 3.032 3.74 4.04a1.61 1.61 0 0 1 0 1.764C20.502 14.763 17.174 19 12 19c-1.788 0-3.356-.506-4.693-1.247L3.28 21.78a.75.75 0 0 1-1.06 0m6.2-5.139 1.332-1.332a4 4 0 0 0 5.557-5.557l1.6-1.6c1.686 1.19 2.892 2.76 3.557 3.784a.1.1 0 0 1 .021.064.1.1 0 0 1-.021.065C19.27 13.902 16.335 17.5 12 17.5c-1.328 0-2.525-.338-3.58-.859m5.797-5.797a2.5 2.5 0 0 1-3.373 3.373z"
						clipRule="evenodd"
					/>
					<path d="M2.277 12.882a16.6 16.6 0 0 0 2.582 3.08L5.92 14.9a15 15 0 0 1-2.386-2.835.1.1 0 0 1-.021-.065c0-.016.004-.037.021-.065C4.73 10.098 7.665 6.5 12 6.5c.722 0 1.404.1 2.047.274L15.24 5.58A9.3 9.3 0 0 0 12 5c-5.172 0-8.5 4.237-9.723 6.118a1.61 1.61 0 0 0 0 1.764" />
					<path d="M8 12q0 .386.07.75l1.566-1.565c.25-.725.824-1.3 1.55-1.55L12.75 8.07A4 4 0 0 0 8 12" />
				</svg>
			);
	}
};
export default IconViewOff;
