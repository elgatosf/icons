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
const IconLogoMicrosoftExcel = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21.17 3.25a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v15.84a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H7.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 7 19.92V17H2.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 2 16.17V7.83a.8.8 0 0 1 .244-.586A.8.8 0 0 1 2.83 7H7V4.08a.8.8 0 0 1 .244-.586.8.8 0 0 1 .586-.244zM7 13.065l1.182 2.216h1.787L7.986 12.06 9.93 8.895H8.22l-1.093 2.002a.3.3 0 0 0-.03.058.4.4 0 0 1-.038.078A54 54 0 0 0 6.52 9.97q-.273-.528-.546-1.074H4.158l1.895 3.183-2.07 3.203h1.796zm6.875 6.435V17H8.25v2.5zm0-3.75v-3.125H12v3.125zm0-4.375V8.25H12v3.125zm0-4.375V4.5H8.25V7zm6.875 12.5V17h-5.625v2.5zm0-3.75v-3.125h-5.625v3.125zm0-4.375V8.25h-5.625v3.125zm0-4.375V4.5h-5.625V7z" />
				</svg>
			);
	}
};
export default IconLogoMicrosoftExcel;
