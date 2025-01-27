import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCameraHubFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
						d="M4.717 6.42c.054-.201.277-.42.686-.42h5.194c.41 0 .632.219.686.42.119.445.217.993.217 1.58 0 .586-.098 1.135-.217 1.58-.054.201-.277.42-.686.42H5.403c-.41 0-.632-.219-.686-.42a6.5 6.5 0 0 1-.194-1.08H5.5a.5.5 0 0 0 0-1h-.977c.036-.397.11-.764.194-1.08M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M3.751 6.162C3.946 5.43 4.645 5 5.403 5h5.194c.758 0 1.457.43 1.652 1.162.135.506.251 1.143.251 1.838s-.116 1.331-.251 1.838c-.195.732-.894 1.162-1.652 1.162H5.403c-.758 0-1.457-.43-1.652-1.162A7.2 7.2 0 0 1 3.5 8c0-.695.116-1.332.251-1.838"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoCameraHubFilled.iconName = "logo-camera-hub--filled";

export default IconLogoCameraHubFilled;
