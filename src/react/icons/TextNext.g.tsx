import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTextNext = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 3.75A.75.75 0 0 1 3.75 3h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 3.75m0 5.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 9.25M3.75 14a.75.75 0 0 0 0 1.5h7.563a6.5 6.5 0 0 1 .709-1.5zm0 5.5h7.563c.173.534.412 1.037.709 1.5H3.75a.75.75 0 0 1 0-1.5" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146.354-2 2a.5.5 0 0 1-.708-.708L19.293 18H14.5a.5.5 0 0 1 0-1h4.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTextNext.iconName = "text-next";

export default IconTextNext;
