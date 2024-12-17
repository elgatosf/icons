import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMusic = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m9.034 5.032 9.984-2.995a.75.75 0 0 1 .68.111.75.75 0 0 1 .302.62V15.5a3.5 3.5 0 1 1-1.5-2.873V3.758L10 6.308V18.5a3.5 3.5 0 1 1-1.5-2.873V5.75a.75.75 0 0 1 .534-.718M18.5 15.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-10 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMusic.iconName = "music";

export default IconMusic;
