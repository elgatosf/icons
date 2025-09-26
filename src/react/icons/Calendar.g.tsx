import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCalendar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.5 2.75a.75.75 0 0 0-1.5 0V4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2.75a.75.75 0 0 0-1.5 0V4h-7zM4.5 19v-9h15v9a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5M19 5.5a.5.5 0 0 1 .5.5v2.5h-15V6a.5.5 0 0 1 .5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCalendar.iconName = "calendar";

export default IconCalendar;
