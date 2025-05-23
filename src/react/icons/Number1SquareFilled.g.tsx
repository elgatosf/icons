import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber1SquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8.22 13h-1.627V9.631c-.517.473-1.155.814-1.804 1.045V9.323c.89-.308 1.353-.627 2.046-1.276h1.386z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNumber1SquareFilled.iconName = "number1-square--filled";

export default IconNumber1SquareFilled;
