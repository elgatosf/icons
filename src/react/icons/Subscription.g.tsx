import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSubscription = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M8.5 11a.5.5 0 0 1 0 1H8a2.5 2.5 0 0 0 3.494.505 2.5 2.5 0 0 0 .861-1.168l.044-.092a.5.5 0 0 1 .899.427l-.096.24a3.5 3.5 0 0 1-4.995 1.594A3.5 3.5 0 0 1 7 12.298V13.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zM13.5 7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.499a2.494 2.494 0 0 0-3.477-.517 2.5 2.5 0 0 0-.88 1.186l-.042.092a.5.5 0 0 1-.9-.425l.096-.245a3.5 3.5 0 0 1 5.081-1.545c.461.293.844.69 1.123 1.155V7.5a.5.5 0 0 1 .5-.5" />
			<path
				fillRule="evenodd"
				d="M13.5 2a.5.5 0 0 1 .5.5V4h1l.204.01A2 2 0 0 1 17 6v9l-.01.204a2 2 0 0 1-1.786 1.785L15 17H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 15V6a2 2 0 0 1 1.796-1.99L5 4h1V2.5a.5.5 0 0 1 1 0V4h6V2.5a.5.5 0 0 1 .5-.5M5 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSubscription.iconName = "subscription";

export default IconSubscription;
