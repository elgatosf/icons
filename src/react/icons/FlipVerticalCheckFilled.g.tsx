import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipVerticalCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.75 3a.75.75 0 0 0-.53 1.28l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25A.75.75 0 0 0 17.25 3zM11 17.5a6.47 6.47 0 0 1 .862-3.237.75.75 0 0 0-.392.207l-5.25 5.25A.75.75 0 0 0 6.75 21h5.272A6.47 6.47 0 0 1 11 17.5M3 12c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5A.75.75 0 0 0 3 12" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlipVerticalCheckFilled.iconName = "flip-vertical-check--filled";

export default IconFlipVerticalCheckFilled;
