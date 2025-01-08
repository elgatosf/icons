import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBlockQuote = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.75 3a.75.75 0 0 0-.75.75v16.5a.75.75 0 0 0 1.5 0V3.75A.75.75 0 0 0 3.75 3M20.25 3a.75.75 0 0 1 0 1.5H7.75a.75.75 0 0 1 0-1.5zM17.25 8.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 1 1 0-1.5zM21 14.75a.75.75 0 0 0-.75-.75H7.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 .75-.75M17.25 19.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5z" />
		</svg>
	);
};

IconBlockQuote.iconName = "block-quote";

export default IconBlockQuote;
