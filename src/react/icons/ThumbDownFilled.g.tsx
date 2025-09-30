import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbDownFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16 4L8.05518 4C6.25138 4 4.67074 5.20728 4.19613 6.94753L2.68897 12.4738C2.34199 13.746 3.29975 15 4.6185 15L10 15L10 18.6948C10 19.9679 11.0321 21 12.3052 21C13.3135 21 14.2048 20.3447 14.5055 19.3824L16 14.6L16 4Z" />
			<path d="M17.5 4L17.5 13L19 13C20.1046 13 21 12.1046 21 11L21 6C21 4.89543 20.1046 4 19 4L17.5 4Z" />
		</svg>
	);
};

IconThumbDownFilled.iconName = "thumb-down--filled";

export default IconThumbDownFilled;
