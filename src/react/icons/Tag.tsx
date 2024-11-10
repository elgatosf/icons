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
const IconTag = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
					<path
						fillRule="evenodd"
						d="M11.172 3H5a2 2 0 0 0-2 2v6.172a2 2 0 0 0 .586 1.414l9 9a2 2 0 0 0 2.828 0l6.172-6.172a2 2 0 0 0 0-2.828l-9-9A2 2 0 0 0 11.172 3m0 1.5H5a.5.5 0 0 0-.5.5v6.172a.5.5 0 0 0 .147.353l9 9a.5.5 0 0 0 .707 0l6.171-6.171a.5.5 0 0 0 0-.708l-9-9a.5.5 0 0 0-.353-.146"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconTag;
