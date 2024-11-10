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
const IconHeadphonesOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-2.198 2.2A9.96 9.96 0 0 1 22 12v5.25a.75.75 0 0 1-1.5 0V12c0-2.077-.745-3.98-1.983-5.457L10 15.061V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-1.94l-1.72 1.72a.75.75 0 0 1-1.06 0m.605-3.784.671-.671.004-.075V12a8.5 8.5 0 0 1 12.708-7.387l1.094-1.094A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12v5.25a.75.75 0 0 0 .825.746" />
					<path d="M5 15.82 7.82 13H7a2 2 0 0 0-2 2zM16 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2z" />
				</svg>
			);
	}
};
export default IconHeadphonesOffFilled;
