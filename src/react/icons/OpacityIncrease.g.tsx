import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconOpacityIncrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.78 3.22a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M13.78 3.22a.75.75 0 0 1 0 1.06l-9.5 9.5a.75.75 0 0 1-1.06-1.06l9.5-9.5a.75.75 0 0 1 1.06 0M20.78 3.22a.75.75 0 0 1 0 1.06l-16.5 16.5a.75.75 0 0 1-1.06-1.06l16.5-16.5a.75.75 0 0 1 1.06 0M20.78 10.22a.75.75 0 0 1 0 1.06l-.394.394a6.5 6.5 0 0 0-1.578-.542l.912-.912a.75.75 0 0 1 1.06 0M11.132 18.808a6.5 6.5 0 0 0 .542 1.578l-.394.394a.75.75 0 1 1-1.06-1.06z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconOpacityIncrease.iconName = "opacity-increase";

export default IconOpacityIncrease;
