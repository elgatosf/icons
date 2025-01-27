import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogo4kcuFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.648 5.984V8.93h-1.07z" />
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.703 9.68h.602v-.758h-.602V5.215H5.121L3.738 8.762v.918h1.856V11h1.11zM10.672 11h1.387l-1.594-3.215 1.496-2.57h-1.367L9.266 7.847zm-2.649 0h1.211V5.215h-1.21z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogo4kcuFilled.iconName = "logo4kcu--filled";

export default IconLogo4kcuFilled;
