import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconExpandSquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm6.75 4a.75.75 0 0 0 0 1.5h2.69L8.5 14.44v-2.69a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5H9.56l5.94-5.94v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconExpandSquareFilled.iconName = "expand-square--filled";

export default IconExpandSquareFilled;
