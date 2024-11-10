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
const IconCameraFlipFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m7 6 1.703-2.555A1 1 0 0 1 9.535 3h4.93a1 1 0 0 1 .832.445L17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm4.317 3.567a3.5 3.5 0 0 1 4.084 2.607l-.698-.699a.75.75 0 0 0-1.06 1.06l1.877 1.88a.75.75 0 0 0 1.061 0l1.878-1.88a.75.75 0 1 0-1.06-1.06l-.504.504a4.999 4.999 0 0 0-8.43-2.515.75.75 0 1 0 1.06 1.061 3.5 3.5 0 0 1 1.792-.958m1.366 6.866a3.5 3.5 0 0 1-4.084-2.607l.698.699a.75.75 0 0 0 1.06-1.06l-1.877-1.88a.75.75 0 0 0-1.061 0l-1.878 1.88a.75.75 0 1 0 1.06 1.06l.504-.504a5 5 0 0 0 8.43 2.514.75.75 0 1 0-1.06-1.06 3.5 3.5 0 0 1-1.792.958"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCameraFlipFilled;
