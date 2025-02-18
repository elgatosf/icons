import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogo4kcu = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10.186 14.185h.827v-1.042h-.828V8.045H8.01L6.11 12.922v1.263H8.66V16h1.525zm-1.45-5.081v4.05H7.263z"
						clipRule="evenodd"
					/>
					<path d="M15.643 16h1.906l-2.191-4.42 2.057-3.535h-1.88l-1.826 3.62zM12.001 16h1.665V8.045h-1.665z" />
					<path
						fillRule="evenodd"
						d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-1.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M6.703 9.68h.602v-.758h-.602V5.215H5.121L3.738 8.762v.918h1.856V11h1.11zM5.648 5.984V8.93h-1.07z"
						clipRule="evenodd"
					/>
					<path d="M10.672 11h1.387l-1.594-3.215 1.496-2.57h-1.367L9.266 7.848zM8.023 11h1.211V5.215h-1.21z" />
					<path
						fillRule="evenodd"
						d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogo4kcu.iconName = "logo4kcu";

export default IconLogo4kcu;
