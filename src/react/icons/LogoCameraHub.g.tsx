import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCameraHub = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m2.5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M5.404 8.94C5.694 7.748 6.804 7 8.03 7h7.938c1.227 0 2.338.748 2.627 1.94.214.882.404 1.971.404 3.06s-.19 2.178-.404 3.06c-.29 1.192-1.4 1.94-2.627 1.94H8.03c-1.227 0-2.338-.748-2.627-1.94C5.19 14.178 5 13.089 5 12s.19-2.178.404-3.06m1.458.354c.1-.416.522-.794 1.17-.794h7.937c.647 0 1.069.378 1.17.794.198.816.361 1.778.361 2.706s-.163 1.89-.361 2.706c-.101.416-.523.794-1.17.794H8.03c-.647 0-1.068-.378-1.17-.794a13 13 0 0 1-.328-1.956H7.75a.75.75 0 0 0 0-1.5H6.533c.057-.683.184-1.359.329-1.956"
						clipRule="evenodd"
					/>
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
					<path d="M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
					<path
						fillRule="evenodd"
						d="M3.751 6.162C3.946 5.43 4.645 5 5.403 5h5.194c.758 0 1.457.43 1.652 1.162.135.506.251 1.143.251 1.838s-.116 1.332-.251 1.838c-.195.732-.894 1.162-1.652 1.162H5.403c-.758 0-1.457-.43-1.652-1.162A7.2 7.2 0 0 1 3.5 8c0-.695.116-1.332.251-1.838m.966.258c.054-.201.277-.42.686-.42h5.194c.41 0 .632.219.686.42.119.445.217.993.217 1.58s-.098 1.135-.217 1.58c-.054.201-.277.42-.686.42H5.403c-.41 0-.632-.219-.686-.42a6.5 6.5 0 0 1-.194-1.08H5.5a.5.5 0 0 0 0-1h-.977c.036-.396.11-.764.194-1.08"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoCameraHub.iconName = "logo-camera-hub";

export default IconLogoCameraHub;
