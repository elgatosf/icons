import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplayAddFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7.019A6.5 6.5 0 0 1 22 12.81V6a2 2 0 0 0-2-2zM9.75 18.5h1.326c.081.523.224 1.026.422 1.5H9.75a.75.75 0 0 1 0-1.5" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDisplayAddFilled.iconName = "display-add--filled";

export default IconDisplayAddFilled;
