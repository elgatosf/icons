import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChevronsUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-5.25-5.25a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 1 0 1.06 1.06L12 13.06z" />
			<path d="M16.72 12.78a.75.75 0 1 0 1.06-1.06l-5.25-5.25a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 1 0 1.06 1.06L12 8.06z" />
		</svg>
	);
};

IconChevronsUp.iconName = "chevrons-up";

export default IconChevronsUp;
