import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBackgroundReplaceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8M10 15a5 5 0 0 0-5 5 2 2 0 0 0 2 2h10a2 2 0 0 0 2-2 5 5 0 0 0-5-5zM5.53 2.22a.75.75 0 0 1 0 1.06L3.28 5.53a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0M9.53 2.22a.75.75 0 0 1 0 1.06L3.28 9.53a.75.75 0 0 1-1.06-1.06l6.25-6.25a.75.75 0 0 1 1.06 0M6.28 9.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0M11.47 4.28a.75.75 0 0 1 0-1.06l.997-.997a.75.75 0 1 1 1.06 1.06l-.997.998a.75.75 0 0 1-1.06 0M7.132 12.618a.75.75 0 0 1 0 1.06L3.28 17.53a.75.75 0 1 1-1.06-1.06l3.851-3.852a.75.75 0 0 1 1.06 0M14.617 5.133a.75.75 0 0 1 0-1.06L16.47 2.22a.75.75 0 1 1 1.06 1.06l-1.853 1.853a.75.75 0 0 1-1.06 0M19.234 17.016a.75.75 0 0 1 0-1.06l1.486-1.486a.75.75 0 1 1 1.06 1.06l-1.486 1.486a.75.75 0 0 1-1.06 0M17.287 14.963a.75.75 0 0 1 0-1.06l3.433-3.433a.75.75 0 1 1 1.06 1.06l-3.432 3.433a.75.75 0 0 1-1.06 0M17.72 10.53a.75.75 0 0 1 0-1.061l3-3a.75.75 0 1 1 1.06 1.061l-2.999 3a.75.75 0 0 1-1.06 0M21.78 2.22a.75.75 0 0 1 0 1.06l-3.943 3.944a.75.75 0 1 1-1.06-1.06L20.72 2.22a.75.75 0 0 1 1.06 0"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M4.854 2.854a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 1 0 .708.708zM8.104 2.854a.5.5 0 0 0-.708-.708l-5.25 5.252a.5.5 0 0 0 .706.707zM11.354 2.854a.5.5 0 0 0-.708-.708l-.091.092a.5.5 0 0 0 .707.707zM14.604 2.854a.5.5 0 0 0-.708-.708l-1.195 1.196a.5.5 0 1 0 .707.707zM17.854 2.854a.5.5 0 0 0-.708-.708L13.954 5.34a.5.5 0 0 0 .707.707zM17.85 6.102a.5.5 0 1 0-.707-.707l-3.761 3.762a.5.5 0 1 0 .707.707zM5.945 8.262a.5.5 0 0 0-.707-.707L2.15 10.643a.5.5 0 1 0 .707.707zM17.849 9.354a.5.5 0 1 0-.707-.707l-2.658 2.658a.5.5 0 1 0 .707.707zM7.049 10.408a.5.5 0 1 0-.707-.707l-4.194 4.194a.5.5 0 1 0 .708.707zM17.854 12.6a.5.5 0 0 0-.708-.708l-1.428 1.428a.5.5 0 0 0 .707.708zM13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10 11a5 5 0 0 0-5 5 2 2 0 0 0 2 2h6a2 2 0 0 0 2-2 5 5 0 0 0-5-5" />
				</svg>
			);
	}
};

IconBackgroundReplaceFilled.iconName = "background-replace--filled";

export default IconBackgroundReplaceFilled;
