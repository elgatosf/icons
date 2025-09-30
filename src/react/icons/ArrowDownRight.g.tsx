import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowDownRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5.14645 5.14645C5.34171 4.95118 5.65829 4.95118 5.85355 5.14645L14 13.2929V8C14 7.72386 14.2239 7.5 14.5 7.5C14.7761 7.5 15 7.72386 15 8V14.5C15 14.7761 14.7761 15 14.5 15H8C7.72386 15 7.5 14.7761 7.5 14.5C7.5 14.2239 7.72386 14 8 14H13.2929L5.14645 5.85355C4.95118 5.65829 4.95118 5.34171 5.14645 5.14645Z"
			/>
		</svg>
	);
};

IconArrowDownRight.iconName = "arrow-down-right";

export default IconArrowDownRight;
