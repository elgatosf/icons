import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber0 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.85 11.9439C15.85 14.6319 14.954 17.2779 11.972 17.2779C9.00402 17.2779 8.15002 14.5619 8.15002 11.9299C8.15002 9.31192 9.10202 6.72192 12.014 6.72192C14.968 6.72192 15.85 9.31192 15.85 11.9439ZM13.75 12.0699C13.75 10.8099 13.722 8.17792 12.042 8.17792C10.278 8.17792 10.264 10.8099 10.264 12.0979C10.264 13.3019 10.334 15.8079 11.972 15.8079C13.652 15.8079 13.75 13.3299 13.75 12.0699Z" />
		</svg>
	);
};

IconNumber0.iconName = "number0";

export default IconNumber0;
