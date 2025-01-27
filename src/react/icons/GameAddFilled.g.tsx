import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGameAddFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5.617 5A2 2 0 0 0 3.66 6.58l-1.915 8.938a2.879 2.879 0 0 0 5.118 2.33L9 15h2.498a6.52 6.52 0 0 1 3.866-3.641 1.5 1.5 0 1 1 1.744-.347Q17.303 11 17.5 11c1.553 0 2.98.545 4.097 1.454L20.34 6.58A2 2 0 0 0 18.383 5zM8.75 8.5a.75.75 0 1 0-1.5 0v.75H6.5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z"
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

IconGameAddFilled.iconName = "game-add--filled";

export default IconGameAddFilled;
