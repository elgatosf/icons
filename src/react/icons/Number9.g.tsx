import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber9 = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M15.8151 11.8111C15.8151 14.6811 15.0171 17.2851 11.7691 17.2851C9.59906 17.2851 8.19906 16.3051 8.19906 14.5971H10.2991C10.3411 15.1151 10.5371 15.7591 11.7691 15.7591C13.6871 15.7591 13.7851 13.5191 13.8131 12.0911C13.2671 12.9591 12.5951 13.3371 11.4051 13.3371C9.55706 13.3371 8.18506 12.0631 8.18506 10.1031C8.18506 7.98909 9.82306 6.71509 11.8951 6.71509C14.9611 6.71509 15.8151 9.06709 15.8151 11.8111ZM13.6591 10.0471C13.6591 8.94109 13.0011 8.15709 11.9231 8.15709C10.7471 8.15709 10.1451 8.91309 10.1451 10.0471C10.1451 11.1391 10.7751 11.9791 11.8531 11.9791C12.9591 11.9791 13.6591 11.2091 13.6591 10.0471Z" />
		</svg>
	);
};

IconNumber9.iconName = "number9";

export default IconNumber9;
