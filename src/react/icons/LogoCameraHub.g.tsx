import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCameraHub = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
