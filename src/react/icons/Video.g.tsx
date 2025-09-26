import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVideo = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M16.25 10.701c1 .577 1 2.02 0 2.598l-6 3.464A1.5 1.5 0 0 1 8 15.464V8.536a1.5 1.5 0 0 1 2.25-1.3zM15.5 12l-6 3.464V8.536z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
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
						d="M13.294 10.866 8.5 13.634a1 1 0 0 1-1.5-.866V7.232a1 1 0 0 1 1.5-.866l4.794 2.768a1 1 0 0 1 0 1.732m-.5-.866L8 12.768V7.232z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconVideo.iconName = "video";

export default IconVideo;
