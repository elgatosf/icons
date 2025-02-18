import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAr = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.25 3.5a.75.75 0 0 0 0-1.5H4a2 2 0 0 0-2 2v1.25a.75.75 0 0 0 1.5 0V4a.5.5 0 0 1 .5-.5zM3.5 18.75a.75.75 0 0 0-1.5 0V20a2 2 0 0 0 2 2h1.25a.75.75 0 0 0 0-1.5H4a.5.5 0 0 1-.5-.5zM21.25 6a.75.75 0 0 1-.75-.75V4a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H20a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-.75.75M18.75 20.5a.75.75 0 0 0 0 1.5H20a2 2 0 0 0 2-2v-1.25a.75.75 0 0 0-1.5 0V20a.5.5 0 0 1-.5.5z" />
					<path
						fillRule="evenodd"
						d="M11 4.494a2 2 0 0 1 2 0l5 2.887a2 2 0 0 1 1 1.732v5.774a2 2 0 0 1-1 1.732l-5 2.887a2 2 0 0 1-2 0l-5-2.887a2 2 0 0 1-1-1.732V9.113a2 2 0 0 1 1-1.732zm1.25 1.3 4.5 2.598L12 11.134 7.25 8.392l4.5-2.599a.5.5 0 0 1 .5 0m.5 6.639 4.75-2.742v5.196a.5.5 0 0 1-.25.433l-4.5 2.598zm-1.5 0v5.485l-4.5-2.598a.5.5 0 0 1-.25-.433V9.69z"
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
					<path d="M4 2a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1z" />
					<path
						fillRule="evenodd"
						d="M9 3.65a2 2 0 0 1 2 0l4 2.309a2 2 0 0 1 1 1.732v4.618a2 2 0 0 1-1 1.732l-4 2.31a2 2 0 0 1-2 0l-4-2.31a2 2 0 0 1-1-1.732V7.691a2 2 0 0 1 1-1.732zm5.5 3.175-4-2.31a1 1 0 0 0-1 0l-4 2.31L10 9.423zM5 7.69v4.618a1 1 0 0 0 .5.866l4 2.31v-5.196zm5.5 7.794 4-2.31a1 1 0 0 0 .5-.866V7.691l-4.5 2.598z"
						clipRule="evenodd"
					/>
					<path d="M2 16a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0zM16 2a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1zM18 16a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0z" />
				</svg>
			);
	}
};

IconAr.iconName = "ar";

export default IconAr;
