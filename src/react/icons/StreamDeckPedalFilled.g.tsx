import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckPedalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.5 12.5C13.5 13.3284 12.8284 14 12 14C11.1716 14 10.5 13.3284 10.5 12.5C10.5 11.6716 11.1716 11 12 11C12.8284 11 13.5 11.6716 13.5 12.5Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.9098 4L15.0902 4L17.2275 20H6.77253L8.9098 4ZM15 12.5C15 14.1569 13.6569 15.5 12 15.5C10.3431 15.5 9 14.1569 9 12.5C9 10.8432 10.3431 9.5 12 9.5C13.6569 9.5 15 10.8432 15 12.5Z"
			/>
			<path d="M20.0027 4H16.6035L18.8744 21H20C21.1045 21 22 20.1046 22 19V6C22 4.89544 21.1073 4.00001 20.0027 4Z" />
			<path d="M7.39648 4L3.99366 4C2.88909 4 2 4.89543 2 6V19C2 20.1046 2.89543 21 4 21L5.12563 21L7.39648 4Z" />
		</svg>
	);
};

IconStreamDeckPedalFilled.iconName = "stream-deck-pedal--filled";

export default IconStreamDeckPedalFilled;
