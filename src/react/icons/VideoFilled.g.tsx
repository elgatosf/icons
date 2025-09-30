import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVideoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.25 10.701C17.25 11.2783 17.25 12.7217 16.25 13.2991L10.25 16.7632C9.25 17.3405 8 16.6188 8 15.4641V8.53593C8 7.38123 9.25 6.65954 10.25 7.23689L16.25 10.701Z"
					/>
				</svg>
			);
		default:
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5ZM8.5 13.6339L13.2942 10.8659C13.9609 10.481 13.9609 9.51878 13.2942 9.13388L8.5 6.36594C7.83333 5.98104 7 6.46216 7 7.23196L7 12.7679C7 13.5377 7.83333 14.0188 8.5 13.6339Z"
					/>
				</svg>
			);
	}
};

IconVideoFilled.iconName = "video--filled";

export default IconVideoFilled;
