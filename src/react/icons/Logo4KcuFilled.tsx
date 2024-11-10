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
const IconLogo4KcuFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8.735 9.104v4.05H7.264z" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1.815-7.815h.828v-1.042h-.828V8.045H8.01l-1.9 4.877v1.263h2.55V16h1.525zM15.643 16h1.906l-2.191-4.42 2.057-3.535h-1.88l-1.826 3.62zM12 16h1.665V8.045H12z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogo4KcuFilled;
