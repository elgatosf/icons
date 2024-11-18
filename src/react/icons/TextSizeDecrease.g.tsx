import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTextSizeDecrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.28 2.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06L19 3.94z" />
			<path
				fillRule="evenodd"
				d="M12 4a.75.75 0 0 1 .697.474l5.75 14.5a.75.75 0 1 1-1.394.552L15.456 15.5H8.544l-1.597 4.026a.75.75 0 0 1-1.394-.552l5.75-14.5A.75.75 0 0 1 12 4m0 2.785L14.861 14H9.14z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTextSizeDecrease.iconName = "text-size-decrease";

export default IconTextSizeDecrease;
