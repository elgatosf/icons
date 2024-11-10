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
const IconStreamDeckNeoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M6 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m10 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3.334 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M9.333 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0M9 15.255a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m10.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM7 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.334 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.333 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconStreamDeckNeoFilled;
