import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMusicAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m9.034 5.032 9.984-2.995a.75.75 0 0 1 .68.111.75.75 0 0 1 .302.62v8.73a6.5 6.5 0 0 0-1.5-.422V3.758L10 6.308V18.5a3.5 3.5 0 1 1-1.5-2.873V5.75a.75.75 0 0 1 .534-.718M8.5 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMusicAdd.iconName = "music-add";

export default IconMusicAdd;
