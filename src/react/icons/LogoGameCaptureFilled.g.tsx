import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGameCaptureFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6 5.113 11 8l-5 2.887z" />
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5 4.536v6.928l1 .577 6-3.464V7.423L6 3.959z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoGameCaptureFilled.iconName = "logo-game-capture--filled";

export default IconLogoGameCaptureFilled;
