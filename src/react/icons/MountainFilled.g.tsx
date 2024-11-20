import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMountainFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.2 5c.769-1.333 2.693-1.333 3.463 0l.99 1.713a.75.75 0 0 1 0 .748c-.596 1.03-2.314 3.998-3.71 6.416a.75.75 0 1 0 1.299.75L14.069 8c.77-1.333 2.694-1.333 3.464 0l5.196 9c.77 1.333-.192 3-1.732 3H3.003c-1.54 0-2.502-1.667-1.732-3z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMountainFilled.iconName = "mountain--filled";

export default IconMountainFilled;
