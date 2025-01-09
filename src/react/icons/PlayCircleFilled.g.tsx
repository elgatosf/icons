import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlayCircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m4.258-8.268c1.334-.77 1.334-2.694 0-3.464L11 7.232c-1.333-.77-3 .192-3 1.732v6.072c0 1.54 1.667 2.502 3 1.732z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPlayCircleFilled.iconName = "play-circle--filled";

export default IconPlayCircleFilled;
