import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignVerticalCenter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6 18a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5.25h2V15a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2.25h2.25a.75.75 0 0 0 0-1.5H18V9a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2.25h-2V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5.25H3.75a.75.75 0 0 0 0 1.5H6zm1.5 0a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5zm7.5-2.5a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconAlignVerticalCenter.iconName = "align-vertical-center";

export default IconAlignVerticalCenter;
