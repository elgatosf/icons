import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconAutoScrollUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.22 10.78a.75.75 0 0 0 1.06 0L12 7.06l3.72 3.72a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.75.75 0 0 0-1.06 0L7.22 9.72a.75.75 0 0 0 0 1.06" />
			<path
				fillRule="evenodd"
				d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconAutoScrollUp.iconName = "auto-scroll-up";

export default IconAutoScrollUp;
