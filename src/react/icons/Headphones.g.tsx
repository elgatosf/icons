import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeadphones = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M10 3a7 7 0 0 0-7 7v4.5a.5.5 0 0 1-1 0V10a8 8 0 1 1 16 0v4.5a.5.5 0 0 1-1 0V10a7 7 0 0 0-7-7" />
					<path
						fillRule="evenodd"
						d="M5.5 11A1.5 1.5 0 0 0 4 12.5v4A1.5 1.5 0 0 0 5.5 18h1A1.5 1.5 0 0 0 8 16.5v-4A1.5 1.5 0 0 0 6.5 11zm1 1h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M12 12.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHeadphones.iconName = "headphones";

export default IconHeadphones;
