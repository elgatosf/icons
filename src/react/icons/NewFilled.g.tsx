import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNewFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M13.41 2.582a2 2 0 0 0-2.82 0L9.408 3.757a2 2 0 0 1-1.404.581l-1.667.005a2 2 0 0 0-1.994 1.994l-.005 1.667a2 2 0 0 1-.581 1.404L2.582 10.59a2 2 0 0 0 0 2.82l1.175 1.182a2 2 0 0 1 .581 1.404l.005 1.667a2 2 0 0 0 1.994 1.994l1.667.005a2 2 0 0 1 1.404.581l1.182 1.175a2 2 0 0 0 2.82 0l1.182-1.175a2 2 0 0 1 1.404-.581l1.667-.005a2 2 0 0 0 1.994-1.994l.005-1.667a2 2 0 0 1 .581-1.404l1.175-1.182a2 2 0 0 0 0-2.82l-1.175-1.182a2 2 0 0 1-.581-1.404l-.005-1.667a2 2 0 0 0-1.994-1.994l-1.667-.005a2 2 0 0 1-1.404-.581zm-.48 4.777c-.333-.844-1.527-.844-1.86 0l-1.05 2.661-2.661 1.05c-.844.333-.844 1.527 0 1.86l2.661 1.05 1.05 2.661c.333.844 1.527.844 1.86 0l1.05-2.661 2.661-1.05c.844-.333.844-1.527 0-1.86l-2.661-1.05z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNewFilled.iconName = "new--filled";

export default IconNewFilled;
