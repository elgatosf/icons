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
const IconLogoMicrosoftOnenote = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21.17 3.25a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v15.84a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H7.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 7 19.92V17H2.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 2 16.17V7.83a.8.8 0 0 1 .244-.586A.8.8 0 0 1 2.83 7H7V4.08a.8.8 0 0 1 .244-.586.8.8 0 0 1 .586-.244zM5.799 11.17l2.363 4.101h1.484V8.73H8.201v4.189l-2.275-4.19H4.354v6.543h1.445zM20.75 19.5V17h-2.5v2.5zm0-3.75v-2.5h-2.5v2.5zm0-3.75V9.5h-2.5V12zm0-3.75V4.5H8.25V7h2.92a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v8.34a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H8.25v2.5H17V8.25z" />
				</svg>
			);
	}
};
export default IconLogoMicrosoftOnenote;
