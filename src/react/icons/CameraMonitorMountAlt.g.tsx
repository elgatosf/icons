import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraMonitorMountAlt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14 14.5a2 2 0 0 1 2 2v3.75a.75.75 0 0 1-1.5 0V16.5a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v3.75a.75.75 0 0 1-1.5 0V16.5a2 2 0 0 1 2-2z" />
			<path
				fillRule="evenodd"
				d="M19.204 3.01A2 2 0 0 1 21 5v3l-.01.204a2 2 0 0 1-1.786 1.785L19 10h-5v1.5h1.25a.75.75 0 0 1 0 1.5H5.268a.5.5 0 0 0-.354.854L8.78 17.72l.052.056a.75.75 0 0 1-1.056 1.056l-.056-.052-3.866-3.866c-1.26-1.26-.368-3.414 1.414-3.414H12.5V10h-5l-.204-.01a2 2 0 0 1-1.785-1.786L5.5 8V5a2 2 0 0 1 1.795-1.99L7.5 3H19zM7.5 4.5A.5.5 0 0 0 7 5v3a.5.5 0 0 0 .5.5H19a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraMonitorMountAlt.iconName = "camera-monitor-mount-alt";

export default IconCameraMonitorMountAlt;
