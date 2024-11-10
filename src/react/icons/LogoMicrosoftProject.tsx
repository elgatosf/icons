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
const IconLogoMicrosoftProject = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6.844 9.998q.479 0 .761.186.285.185.284.703 0 .225-.098.361a.84.84 0 0 1-.264.234.9.9 0 0 1-.351.118l-.371.039h-.899V9.998zM22 15.33v4.59a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H9.705a.8.8 0 0 1-.586-.244.8.8 0 0 1-.244-.586V17H2.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 2 16.17V7.83a.8.8 0 0 1 .244-.586A.8.8 0 0 1 2.83 7H4.5V4.08a.8.8 0 0 1 .244-.586.8.8 0 0 1 .586-.244h8.965a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v4.795h2.295a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586V14.5h2.92a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586m-5-5.205h-5V14.5h5zm-7.51.713q0-.567-.185-.967a1.76 1.76 0 0 0-.528-.664 2.1 2.1 0 0 0-.78-.371 4.5 4.5 0 0 0-.977-.117H4.373v6.553h1.533v-2.286h1.035q.48 0 .928-.136.45-.137.82-.41.372-.274.577-.674a2.2 2.2 0 0 0 .224-.928M5.75 7h5.42a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v1.045h1.875V4.5H5.75zm15 12.5v-3.75H12v.42a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244h-1.045v2.5z" />
				</svg>
			);
	}
};
export default IconLogoMicrosoftProject;
