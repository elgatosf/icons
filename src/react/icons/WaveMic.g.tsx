import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWaveMic = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1.25v2.5h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5V18H10a2 2 0 0 1-2-2zm2-.5h4a.5.5 0 0 1 .5.5v7h-5V4a.5.5 0 0 1 .5-.5m-.5 9V16a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.5z"
				clipRule="evenodd"
			/>
			<path d="M5.75 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m13.25.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" />
		</svg>
	);
};

IconWaveMic.iconName = "wave-mic";

export default IconWaveMic;
