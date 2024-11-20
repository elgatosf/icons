import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMicrophoneFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3" />
			<path d="M7.5 12A.75.75 0 0 0 6 12a6 6 0 0 0 5.25 5.953V20.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-2.547A6 6 0 0 0 18 12a.75.75 0 0 0-1.5 0 4.5 4.5 0 1 1-9 0" />
		</svg>
	);
};

IconMicrophoneFilled.iconName = "microphone--filled";

export default IconMicrophoneFilled;
