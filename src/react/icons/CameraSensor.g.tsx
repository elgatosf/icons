import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraSensor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.72 7.22a.75.75 0 1 1 1.06 1.06l-8.5 8.5a.75.75 0 1 1-1.06-1.06zM16.72 12.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06zM9.72 7.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06z" />
			<path
				fillRule="evenodd"
				d="M11.25 2a.75.75 0 0 1 .75.75V4h7a2 2 0 0 1 2 2v1h1.25a.75.75 0 0 1 0 1.5H21v2.75h1.25a.75.75 0 0 1 0 1.5H21v2.75h1.25a.75.75 0 0 1 0 1.5H21v1a2 2 0 0 1-2 2h-1v1.25a.75.75 0 0 1-1.5 0V20h-3v1.25a.75.75 0 0 1-1.5 0V20H5a2 2 0 0 1-2-2v-1H1.75a.75.75 0 0 1 0-1.5H3v-2.75H1.75a.75.75 0 0 1 0-1.5H3V8.5H1.75a.75.75 0 0 1 0-1.5H3V6a2 2 0 0 1 2-2h1V2.75a.75.75 0 0 1 1.5 0V4h3V2.75a.75.75 0 0 1 .75-.75M5 5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraSensor.iconName = "camera-sensor";

export default IconCameraSensor;
