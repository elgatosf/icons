import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMicrophone = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M10 2a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3m2 8V5a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0"
						clipRule="evenodd"
					/>
					<path d="M5.5 9.5a.5.5 0 0 1 .5.5 4 4 0 1 0 8 0 .5.5 0 0 1 1 0 5 5 0 0 1-4.5 4.975V17h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2.025A4.997 4.997 0 0 1 5 10a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconMicrophone.iconName = "microphone";

export default IconMicrophone;
