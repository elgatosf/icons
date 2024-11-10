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
const IconCrown = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12.617 3.323a.75.75 0 0 0-1.234 0L7.262 9.277l-4.163-2.19a.75.75 0 0 0-1.09.781l1.65 10.348a2.25 2.25 0 0 0 2.221 1.896h12.24a2.25 2.25 0 0 0 2.222-1.895l1.649-10.349a.75.75 0 0 0-1.09-.782l-4.162 2.19zm-4.5 7.354L12 5.067l3.883 5.61a.75.75 0 0 0 .966.237l3.425-1.803L19.336 15H4.665l-.939-5.889 3.425 1.803a.75.75 0 0 0 .966-.237M4.904 16.5l.235 1.48a.75.75 0 0 0 .741.633h12.24a.75.75 0 0 0 .74-.633l.237-1.48z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCrown;
