import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSpeakerSwitchToFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
			<path
				fillRule="evenodd"
				d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.498A6.5 6.5 0 0 0 17.5 11a6.5 6.5 0 0 0-3.111.791 4 4 0 1 0-3.236 7.119A6.5 6.5 0 0 0 12.81 22H6a2 2 0 0 1-2-2zm8 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
				clipRule="evenodd"
			/>
			<path d="M12 12.5c.384 0 .748.086 1.072.241a6.48 6.48 0 0 0-2.069 4.552A2.5 2.5 0 0 1 12 12.5" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m1.354-3.146 2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L19.293 17H14.5a.5.5 0 0 0 0 1h4.793l-1.147 1.146a.5.5 0 0 0 .708.708"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSpeakerSwitchToFilled.iconName = "speaker-switch-to--filled";

export default IconSpeakerSwitchToFilled;
