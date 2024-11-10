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
const IconFilmFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3.638 6.153a2 2 0 0 0-1.414 2.45L3 11.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H8.598l9.857-2.641a2 2 0 0 0 1.414-2.45l-.259-.965a2 2 0 0 0-2.45-1.415zm13.911-2.175-.65.174-1.276 2.413 2.444-.655a.5.5 0 0 0 .353-.612l-.259-.966a.5.5 0 0 0-.612-.354m-4.997 1.34 2.37-.636-1.276 2.413-2.37.635 1.276-2.413Zm-1.977.529L9.3 8.259l-2.37.635 1.277-2.412 2.37-.635ZM6.23 7.012 4.952 9.424l-.891.239-.388-1.449a.5.5 0 0 1 .353-.612l2.203-.59Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconFilmFilled;
