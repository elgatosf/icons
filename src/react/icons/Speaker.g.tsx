import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSpeaker = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm12 1.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5"
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
						d="M10 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M12 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSpeaker.iconName = "speaker";

export default IconSpeaker;
