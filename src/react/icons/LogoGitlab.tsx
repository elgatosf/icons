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
const IconLogoGitlab = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="m21.668 9.994-.028-.072-2.723-7.104a.71.71 0 0 0-.703-.446.73.73 0 0 0-.41.153.73.73 0 0 0-.241.367l-1.838 5.623H8.28L6.443 2.892a.7.7 0 0 0-.241-.368.73.73 0 0 0-.833-.045.7.7 0 0 0-.28.338L2.36 9.918l-.027.072a5.055 5.055 0 0 0 1.677 5.842l.009.008.025.017 4.147 3.106 2.051 1.553 1.25.943a.84.84 0 0 0 1.017 0l1.25-.943 2.05-1.553 4.173-3.124.01-.009a5.06 5.06 0 0 0 1.675-5.836Z" />
				</svg>
			);
	}
};
export default IconLogoGitlab;
