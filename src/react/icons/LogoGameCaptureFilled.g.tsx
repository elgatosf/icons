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
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M9.5 8.66 15.286 12 9.5 15.34z" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8 7.546v8.908l1.286.742L17 12.742v-1.484L9.286 6.804z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoGameCaptureFilled.iconName = "logo-game-capture--filled";

export default IconLogoGameCaptureFilled;
