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
const IconNotificationOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-4.023 4.024C17.915 7.842 18 8.41 18 9v3l1.414 1.414A2 2 0 0 1 20 14.828V16a2 2 0 0 1-2 2h-2.127a4 4 0 0 1-7.746 0H7.061l-3.78 3.78a.75.75 0 0 1-1.061 0m6.34-5.28H18a.5.5 0 0 0 .5-.5v-1.172a.5.5 0 0 0-.146-.353l-1.415-1.414A1.5 1.5 0 0 1 16.5 12V9a4 4 0 0 0-.02-.42zM9.71 18a2.5 2.5 0 0 0 4.582 0z"
						clipRule="evenodd"
					/>
					<path d="M4.125 16.696 5.5 15.321v-.493a.5.5 0 0 1 .146-.353l1.415-1.414A1.5 1.5 0 0 0 7.5 12V9a4.5 4.5 0 0 1 7.591-3.27l1.061-1.061A6 6 0 0 0 6 9v3l-1.414 1.414A2 2 0 0 0 4 14.828V16c0 .245.044.48.125.696" />
				</svg>
			);
	}
};
export default IconNotificationOff;
