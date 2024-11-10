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
const IconNotificationFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 3a6 6 0 0 0-6 6v3l-1.414 1.414A2 2 0 0 0 4 14.828V16a2 2 0 0 0 2 2h2.127a4 4 0 0 0 7.746 0H18a2 2 0 0 0 2-2v-1.172a2 2 0 0 0-.586-1.414L18 12V9a6 6 0 0 0-6-6m2.291 15H9.71a2.5 2.5 0 0 0 4.582 0Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconNotificationFilled;
