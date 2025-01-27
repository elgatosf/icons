import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMoneyFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M7.75 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
				clipRule="evenodd"
			/>
			<path d="M7 20.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M5.75 16.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" />
		</svg>
	);
};

IconMoneyFilled.iconName = "money--filled";

export default IconMoneyFilled;
