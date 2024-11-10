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
const Icon5CircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9.927 10.272c0 1.914-1.155 2.882-2.882 2.882-1.474 0-2.882-.495-2.882-2.222h1.639c.022.704.506 1.056 1.166 1.056.913 0 1.298-.78 1.298-1.66 0-.826-.374-1.552-1.232-1.552-.54 0-1.023.308-1.122.891H9.284l.176-4.62h5.038v1.177h-3.575l-.121 2.354c.418-.627 1.012-.935 1.727-.935 1.496 0 2.398 1.166 2.398 2.63Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default Icon5CircleFilled;
