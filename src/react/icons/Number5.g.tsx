import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber5 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.668 13.4911C15.668 15.9271 14.198 17.1591 12 17.1591C10.124 17.1591 8.33203 16.5291 8.33203 14.3311H10.418C10.446 15.2271 11.062 15.6751 11.902 15.6751C13.064 15.6751 13.554 14.6811 13.554 13.5611C13.554 12.5111 13.078 11.5871 11.986 11.5871C11.3 11.5871 10.684 11.9791 10.558 12.7211H8.48603L8.71003 6.84106H15.122V8.33906H10.572L10.418 11.3351C10.95 10.5371 11.706 10.1451 12.616 10.1451C14.52 10.1451 15.668 11.6291 15.668 13.4911Z" />
		</svg>
	);
};

IconNumber5.iconName = "number5";

export default IconNumber5;
