import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFramePreset = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M2 2.75C2 2.33579 2.33579 2 2.75 2H5.25C5.66421 2 6 2.33579 6 2.75C6 3.16421 5.66421 3.5 5.25 3.5H3.5V5.25C3.5 5.66421 3.16421 6 2.75 6C2.33579 6 2 5.66421 2 5.25V2.75Z" />
			<path d="M2 21.25V18.75C2 18.3358 2.33579 18 2.75 18C3.16421 18 3.5 18.3358 3.5 18.75L3.5 20.5H5.25C5.66421 20.5 6 20.8358 6 21.25C6 21.6642 5.66421 22 5.25 22H2.75C2.55109 22 2.36032 21.921 2.21967 21.7803C2.07902 21.6397 2 21.4489 2 21.25Z" />
			<path d="M21.25 22H18.75C18.3358 22 18 21.6642 18 21.25C18 20.8358 18.3358 20.5 18.75 20.5H20.5V18.75C20.5 18.3358 20.8358 18 21.25 18C21.6642 18 22 18.3358 22 18.75V21.25C22 21.4489 21.921 21.6397 21.7803 21.7803C21.6397 21.921 21.4489 22 21.25 22Z" />
			<path d="M22 2.75V5.25C22 5.66421 21.6642 6 21.25 6C20.8358 6 20.5 5.66421 20.5 5.25V3.5L18.75 3.5C18.3358 3.5 18 3.16421 18 2.75C18 2.33579 18.3358 2 18.75 2H21.25C21.6642 2 22 2.33579 22 2.75Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7ZM17 6.5H15V13C15 14.1046 14.1046 15 13 15H6.5V17C6.5 17.2761 6.72386 17.5 7 17.5H17C17.2761 17.5 17.5 17.2761 17.5 17V7C17.5 6.72386 17.2761 6.5 17 6.5ZM7 6.5H13.5V13C13.5 13.2761 13.2761 13.5 13 13.5H6.5V7C6.5 6.72386 6.72386 6.5 7 6.5Z"
			/>
		</svg>
	);
};

IconCameraFramePreset.iconName = "camera-frame-preset";

export default IconCameraFramePreset;
