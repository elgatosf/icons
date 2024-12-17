import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const Icon2CircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9.772 13H9.03v-1.309l.223-.176c1.21-.956 3.781-2.986 3.781-4.389 0-.682-.429-1.11-1.067-1.11-.715 0-1.122.494-1.144 1.231h-1.66c.031-1.727 1.417-2.397 2.88-2.397 1.31 0 2.684.693 2.684 2.211 0 1.59-1.752 3.043-3.066 4.132-.258.214-.499.414-.707.598h3.817z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Icon2CircleFilled.iconName = "2-circle--filled";

export default Icon2CircleFilled;
