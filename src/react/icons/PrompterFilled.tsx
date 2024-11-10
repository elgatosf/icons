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
const IconPrompterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4.331 2a2 2 0 0 0-1.977 2.304l1.385 9A2 2 0 0 0 5.716 15H7v2H5.132a2 2 0 0 0-1.715.971l-.6 1c-.8 1.333.16 3.029 1.715 3.029h14.936c1.554 0 2.515-1.696 1.715-3.029l-.6-1A2 2 0 0 0 18.868 17H17v-2h1.284a2 2 0 0 0 1.977-1.696l1.384-9A2 2 0 0 0 19.67 2H4.33ZM17 13.5H7a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconPrompterFilled;
