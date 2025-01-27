import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBug = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M10 2.75a.75.75 0 0 0-1.5 0v2.376A6 6 0 0 0 6.544 7.5H3.747a.75.75 0 0 0 0 1.5h2.336A6 6 0 0 0 6 10v1.5H3.747a.75.75 0 0 0 0 1.5H6v2q0 .252.02.5H3.767a.75.75 0 0 0 0 1.5h2.575a6.002 6.002 0 0 0 11.318 0h2.591a.75.75 0 0 0 0-1.5h-2.27q.02-.248.02-.5v-2h2.25a.75.75 0 0 0 0-1.5H18V10q0-.511-.083-1h2.335a.75.75 0 0 0 0-1.5h-2.796A6 6 0 0 0 15.5 5.126V2.751a.75.75 0 0 0-1.5 0v1.59A6 6 0 0 0 12 4a6 6 0 0 0-2 .341zM7.5 15v-4.5h3.75v8.938A4.5 4.5 0 0 1 7.5 15m9 0c0 2.23-1.622 4.08-3.75 4.438V10.5h3.75zM12 5.5A4.5 4.5 0 0 1 16.389 9H7.612A4.5 4.5 0 0 1 12 5.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBug.iconName = "bug";

export default IconBug;
