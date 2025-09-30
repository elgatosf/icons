import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHomeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 8.9782C3 8.36102 3.28495 7.77841 3.77212 7.39949L10.7721 1.95505C11.4943 1.39332 12.5057 1.39332 13.2279 1.95505L20.2279 7.39949C20.7151 7.77841 21 8.36102 21 8.9782V19C21 20.1046 20.1046 21 19 21H15.5C14.3954 21 13.5 20.1046 13.5 19V13H10.5V19C10.5 20.1046 9.60457 21 8.5 21H5C3.89543 21 3 20.1046 3 19V8.9782Z" />
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
					<path d="M11.2919 2.43813C10.5462 1.80716 9.45381 1.80716 8.70812 2.43813L3.70812 6.6689C3.25901 7.04891 3 7.60737 3 8.19567V15C3 16.1045 3.89543 17 5 17H7C8.10457 17 9 16.1045 9 15V10.5C9 10.2238 9.22386 9.99998 9.5 9.99998H10.5C10.7761 9.99998 11 10.2238 11 10.5V15C11 16.1045 11.8954 17 13 17H15C16.1046 17 17 16.1045 17 15V8.19567C17 7.60737 16.741 7.04891 16.2919 6.6689L11.2919 2.43813Z" />
				</svg>
			);
	}
};

IconHomeFilled.iconName = "home--filled";

export default IconHomeFilled;
