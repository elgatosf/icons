import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconRingLightOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-2.803 2.803a8 8 0 0 1-6.227 11.882v3.285a.75.75 0 0 1-1.5 0v-3.285a7.95 7.95 0 0 1-3.167-.988L3.28 21.78a.75.75 0 0 1-1.06 0m10.347-9.287.005.002c.429.09.819.316 1.315.604l2.667 1.54A6.48 6.48 0 0 0 18.5 10a6.5 6.5 0 0 0-.635-2.805z"
				clipRule="evenodd"
			/>
			<path d="m5.784 15.037 1.068-1.068a6.5 6.5 0 0 1 9.117-9.117l1.068-1.068A8 8 0 0 0 5.785 15.036" />
		</svg>
	);
};

IconRingLightOffFilled.iconName = "ring-light-off--filled";

export default IconRingLightOffFilled;
