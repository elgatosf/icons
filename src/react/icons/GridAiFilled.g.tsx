import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGridAiFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M14 10C14.4766 10 14.8869 10.3364 14.9805 10.8037C15.2041 11.9217 16.0783 12.7959 17.1963 13.0195C17.6636 13.1131 18 13.5234 18 14C18 14.4766 17.6636 14.8869 17.1963 14.9805C16.0783 15.2041 15.2041 16.0783 14.9805 17.1963C14.8869 17.6636 14.4766 18 14 18C13.5234 18 13.1131 17.6636 13.0195 17.1963C12.7959 16.0783 11.9217 15.2041 10.8037 14.9805C10.3364 14.8869 10 14.4766 10 14C10 13.5234 10.3364 13.1131 10.8037 13.0195C11.9217 12.7959 12.7959 11.9217 13.0195 10.8037L13.041 10.7178C13.1649 10.2957 13.5532 10 14 10Z" />
			<path d="M7 11C8.10457 11 9 11.8954 9 13V15C9 16.1046 8.10457 17 7 17H5C3.89543 17 3 16.1046 3 15V13C3 11.8954 3.89543 11 5 11H7Z" />
			<path d="M7 3C8.10457 3 9 3.89543 9 5V7C9 8.10457 8.10457 9 7 9H5C3.89543 9 3 8.10457 3 7V5C3 3.89543 3.89543 3 5 3H7Z" />
			<path d="M15 3C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5C11 3.89543 11.8954 3 13 3H15Z" />
		</svg>
	);
};

IconGridAiFilled.iconName = "grid-ai--filled";

export default IconGridAiFilled;
