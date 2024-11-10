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
const IconTextDownToBottom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 3.75A.75.75 0 0 1 3.75 3h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 3.75m0 5.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 9.25M3.75 14a.75.75 0 0 0 0 1.5h7.563a6.5 6.5 0 0 1 .709-1.5zm0 5.5h7.563c.173.534.412 1.037.709 1.5H3.75a.75.75 0 0 1 0-1.5" />
					<path
						fillRule="evenodd"
						d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-2.354-7.146 2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L17.5 16.793l-1.646-1.647a.5.5 0 0 0-.708.708M15.5 20a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconTextDownToBottom;
