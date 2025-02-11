import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowTopRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M5.146 14.854a.5.5 0 0 1 0-.708L13.293 6H8a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V6.707l-8.146 8.147a.5.5 0 0 1-.708 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconArrowTopRight.iconName = "arrow-top-right";

export default IconArrowTopRight;
