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
const IconDelivery = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14 18h-4a3 3 0 1 1-6 0 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1h.868a2 2 0 0 1 1.715.971l2.132 3.554A2 2 0 0 1 22 12.554V16a2 2 0 0 1-2 2 3 3 0 1 1-6 0m1-12.5H4a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h.401a2.999 2.999 0 0 1 5.198 0H14.4a3 3 0 0 1 1.099-1.099V6a.5.5 0 0 0-.5-.5Zm4.599 11A3 3 0 0 0 17 15V8.5h.868a.5.5 0 0 1 .428.243l2.133 3.554a.5.5 0 0 1 .071.257V16a.5.5 0 0 1-.5.5zM7 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconDelivery;
