import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowTopRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.14645 14.8536C4.95118 14.6583 4.95118 14.3417 5.14645 14.1464L13.2929 6L8 6C7.72386 6 7.5 5.77614 7.5 5.5C7.5 5.22386 7.72386 5 8 5L14.5 5C14.7761 5 15 5.22386 15 5.5L15 12C15 12.2761 14.7761 12.5 14.5 12.5C14.2239 12.5 14 12.2761 14 12L14 6.70711L5.85355 14.8536C5.65829 15.0488 5.34171 15.0488 5.14645 14.8536Z"
			/>
		</svg>
	);
};

IconArrowTopRight.iconName = "arrow-top-right";

export default IconArrowTopRight;
