import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPresentationPlay = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M15.25 8.701c1 .577 1 2.02 0 2.598l-4.5 2.598a1.5 1.5 0 0 1-2.25-1.299V7.402a1.5 1.5 0 0 1 2.25-1.3zM14.5 10 10 12.598V7.402z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M1.75 3a.75.75 0 0 0 0 1.5H3V15a2 2 0 0 0 2 2h6.25v.94l-2.78 2.78a.75.75 0 1 0 1.06 1.06L12 19.31l2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.78-2.78V17H19a2 2 0 0 0 2-2V4.5h1.25a.75.75 0 0 0 0-1.5zM19.5 4.5h-15V15a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPresentationPlay.iconName = "presentation-play";

export default IconPresentationPlay;
