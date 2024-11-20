import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipVerticalCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.75 3a.75.75 0 0 0-.53 1.28l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25A.75.75 0 0 0 17.25 3zM12 7.94 8.56 4.5h6.88z"
				clipRule="evenodd"
			/>
			<path d="M11.47 14.47a.75.75 0 0 1 .392-.207 6.46 6.46 0 0 0-.846 2.782L8.56 19.5h2.752c.173.534.412 1.037.709 1.5H6.75a.75.75 0 0 1-.53-1.28zM6.75 12c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75m-4 0c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75m10.5 0a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlipVerticalCheck.iconName = "flip-vertical-check";

export default IconFlipVerticalCheck;
