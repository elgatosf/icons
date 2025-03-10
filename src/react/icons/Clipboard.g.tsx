import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconClipboard = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7.014 4A2.25 2.25 0 0 1 9.25 2h5.5a2.25 2.25 0 0 1 2.236 2H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2.236-.5h5.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75m-2.236 2H6a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-1.014a2.25 2.25 0 0 1-2.236 2h-5.5a2.25 2.25 0 0 1-2.236-2"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconClipboard.iconName = "clipboard";

export default IconClipboard;
