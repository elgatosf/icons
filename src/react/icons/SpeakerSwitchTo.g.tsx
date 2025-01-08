import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSpeakerSwitchTo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6.81a6.5 6.5 0 0 1-1.078-1.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v7.076c.523.081 1.026.224 1.5.422V4a2 2 0 0 0-2-2z" />
			<path d="M12 11c.896 0 1.722.294 2.389.791-.478.262-.92.582-1.316.95a2.5 2.5 0 1 0-2.07 4.552L11 17.5q.002.727.153 1.41A4.001 4.001 0 0 1 12 11" />
			<path
				fillRule="evenodd"
				d="M14.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m1.354-3.146 2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L19.293 17H14.5a.5.5 0 0 0 0 1h4.793l-1.147 1.146a.5.5 0 0 0 .708.708"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSpeakerSwitchTo.iconName = "speaker-switch-to";

export default IconSpeakerSwitchTo;
