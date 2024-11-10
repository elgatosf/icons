/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconEyeContactCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zm0 18.5v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m20-18.5v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M13.5 12a1.5 1.5 0 0 1-.06.424q-.564.451-1.016 1.015A1.5 1.5 0 1 1 13.5 12" />
					<path d="M12 9a3 3 0 0 1 2.96 2.515A6.5 6.5 0 0 1 17.5 11c1.088 0 2.113.267 3.014.74a1.5 1.5 0 0 0-.225-.565C19.212 9.54 16.377 6 12 6s-7.212 3.54-8.288 5.175a1.5 1.5 0 0 0 0 1.65c.993 1.509 3.485 4.64 7.304 5.114a6.5 6.5 0 0 1 .5-2.978A3 3 0 0 1 12 9" />
					<path
						fillRule="evenodd"
						d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.646-1.854a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 3.146-3.147a.5.5 0 0 1 .708 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconEyeContactCheckFilled;
