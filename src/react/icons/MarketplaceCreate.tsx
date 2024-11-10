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
const IconMarketplaceCreate = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="m8.982 9.932-.59 1.379-3.2-1.372a3.616 3.616 0 1 1 4.747-4.748l1.372 3.2a.75.75 0 0 0 1.378 0l1.372-3.2a3.616 3.616 0 1 1 4.747 4.748l-3.2 1.372a.75.75 0 0 0 0 1.378l3.2 1.372a3.616 3.616 0 1 1-4.747 4.747l-1.372-3.2a.75.75 0 0 0-1.378 0l-1.372 3.2a3.616 3.616 0 1 1-4.748-4.747l3.2-1.372a.75.75 0 0 0 0-1.378zc1.819.78 1.819 3.358 0 4.137l-3.2 1.372a2.116 2.116 0 1 0 2.778 2.778l1.372-3.2c.78-1.819 3.357-1.819 4.136 0l1.372 3.2a2.116 2.116 0 1 0 2.778-2.778l-3.2-1.372c-1.819-.78-1.819-3.357 0-4.136l3.2-1.372a2.116 2.116 0 1 0-2.778-2.778l-1.372 3.2c-.78 1.819-3.357 1.819-4.136 0l-1.372-3.2A2.116 2.116 0 1 0 5.782 8.56z" />
				</svg>
			);
	}
};
export default IconMarketplaceCreate;
