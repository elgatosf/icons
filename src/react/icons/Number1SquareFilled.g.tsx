import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber1SquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
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
				d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM13.2206 16.0001H11.5926V9.63112C11.0756 10.1041 10.4376 10.4451 9.78857 10.6761V9.32312C10.6796 9.01512 11.1416 8.69612 11.8346 8.04712H13.2206V16.0001Z"
			/>
		</svg>
	);
};

IconNumber1SquareFilled.iconName = "number1-square--filled";

export default IconNumber1SquareFilled;
