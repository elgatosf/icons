import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFramePresetResetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0m20-13.5v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0M15 6.5h2a.5.5 0 0 1 .5.5v4q.776.002 1.5.174V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4.174A6.5 6.5 0 0 1 11 17.5H7a.5.5 0 0 1-.5-.5v-2h4.998A6.52 6.52 0 0 1 15 11.498z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.532-2.277a2.5 2.5 0 1 1-.736 4.045.5.5 0 1 0-.707.707A3.5 3.5 0 1 0 15 15.05v-.55a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 .968-.777"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraFramePresetResetFilled.iconName = "camera-frame-preset-reset--filled";

export default IconCameraFramePresetResetFilled;
