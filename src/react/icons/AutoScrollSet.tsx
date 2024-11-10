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
const IconAutoScrollSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6.28 7.78a.75.75 0 0 1-1.06-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1-1.06 1.06L10 4.06zm0 8.44a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l1.144-1.144a6.5 6.5 0 0 1-.542-1.578L10 19.939z" />
					<path
						fillRule="evenodd"
						d="M13 12q-.002.51-.16.968c-.418.43-.777.918-1.065 1.45A3 3 0 1 1 13 12m-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-3-2a.5.5 0 0 0-.5-.5h-2.828a.5.5 0 0 0 0 1h1.62l-3.146 3.147a.5.5 0 0 0 .707.707L19 16.707v1.621a.5.5 0 1 0 1 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconAutoScrollSet;
