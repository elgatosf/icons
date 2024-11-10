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
const IconNotification = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 9a6 6 0 1 1 12 0v3l1.414 1.414A2 2 0 0 1 20 14.828V16a2 2 0 0 1-2 2h-2.127a4 4 0 0 1-7.746 0H6a2 2 0 0 1-2-2v-1.172a2 2 0 0 1 .586-1.414L6 12zm1.06 4.06A1.5 1.5 0 0 0 7.5 12V9a4.5 4.5 0 0 1 9 0v3c0 .398.158.78.44 1.06l1.414 1.415a.5.5 0 0 1 .146.353V16a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-1.172a.5.5 0 0 1 .146-.353l1.415-1.414ZM9.71 18a2.5 2.5 0 0 0 4.582 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconNotification;
