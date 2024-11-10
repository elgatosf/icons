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
const IconTextSizeSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M15.5 4a.75.75 0 0 0-.697.474L9.75 17.215l-2.803-7.068a.75.75 0 0 0-1.394 0l-3.5 8.827a.75.75 0 0 0 1.394.552l.804-2.026h3.998l.804 2.026a.75.75 0 0 0 1.399-.012l.573-1.444a6.48 6.48 0 0 1 2.15-5.422L15.5 6.785l1.675 4.223a6.6 6.6 0 0 1 1.665.13l-2.643-6.664A.75.75 0 0 0 15.5 4m-9.25 8.459L7.654 16H4.846z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M19.5 15a.5.5 0 0 1 .5.5v2.828a.5.5 0 0 1-1 0v-1.621l-3.146 3.147a.5.5 0 1 1-.708-.707L18.293 16h-1.621a.5.5 0 1 1 0-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconTextSizeSet;
