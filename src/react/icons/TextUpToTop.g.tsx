import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTextUpToTop = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 3.75A.75.75 0 0 1 3.75 3h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 3.75M3 9.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 9.25M3.75 14a.75.75 0 0 0 0 1.5h7.563a6.5 6.5 0 0 1 .709-1.5zM3.75 19.5h7.563c.173.534.412 1.037.709 1.5H3.75a.75.75 0 0 1 0-1.5" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.354-3.854-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708M15 15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTextUpToTop.iconName = "text-up-to-top";

export default IconTextUpToTop;
