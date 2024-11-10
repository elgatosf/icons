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
const IconCurrencyPound = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.543 4.343a6.5 6.5 0 0 1 8.553.56.75.75 0 1 1-1.06 1.061 5 5 0 0 0-8.44 2.56c-.197.99.164 2.23.84 3.476h6.814a.75.75 0 0 1 0 1.5h-6.11c.36 1.2.3 2.516-.06 3.698A6.7 6.7 0 0 1 8.864 19.5h8.386a.75.75 0 0 1 0 1.5H6.767a.754.754 0 0 1-.749-.585.75.75 0 0 1 .424-.85c1.012-.485 1.819-1.54 2.203-2.804.341-1.118.32-2.302-.102-3.261H5.75a.75.75 0 0 1 0-1.5h2.01c-.546-1.2-.882-2.527-.635-3.768a6.5 6.5 0 0 1 2.418-3.889" />
				</svg>
			);
	}
};
export default IconCurrencyPound;
