import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMicrophoneOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.854 2.854a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708l3.982-3.983A5 5 0 0 0 9.5 14.975V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2.025A4.997 4.997 0 0 0 15 10a.5.5 0 0 0-1 0 4 4 0 0 1-6.453 3.16l.715-.715A3 3 0 0 0 13 10V7.707zM10 2a3 3 0 0 1 2.998 2.881l-5.896 5.896A3 3 0 0 1 7 10V5a3 3 0 0 1 3-3M6.304 11.53l.013.031-.75.751A5 5 0 0 1 5 10a.5.5 0 0 1 1 0 4 4 0 0 0 .304 1.53" />
				</svg>
			);
	}
};

IconMicrophoneOffFilled.iconName = "microphone-off--filled";

export default IconMicrophoneOffFilled;
