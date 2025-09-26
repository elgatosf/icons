import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraMonitorMount = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20.25 19.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M12 6c1.657 0 3.175 1.343 3.175 3S13.657 12 12 12a3 3 0 1 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M18.08 3.005a2 2 0 0 1 1.648 1.1l.212.423a10 10 0 0 1 0 8.944l-.212.423-.068.124a2 2 0 0 1-1.58.976l-.14.005h-5.19v1.5h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5V15H6.061l-.141-.005a2 2 0 0 1-1.58-.976l-.068-.124-.21-.423a10 10 0 0 1-.129-8.679l.128-.265.211-.423a2 2 0 0 1 1.648-1.1L6.06 3H17.94zM6.061 4.5a.5.5 0 0 0-.412.216l-.035.06-.21.422a8.5 8.5 0 0 0 0 7.604l.21.422.035.06a.5.5 0 0 0 .412.216H17.94c.364 0 .362-.107.447-.276l.21-.422a8.5 8.5 0 0 0 .21-7.15l-.21-.454-.21-.422a.5.5 0 0 0-.378-.271l-.07-.005z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraMonitorMount.iconName = "camera-monitor-mount";

export default IconCameraMonitorMount;
