import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber10Square = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17.765 11.952c0 2.112-.704 4.191-3.047 4.191-2.332 0-3.003-2.134-3.003-4.202 0-2.057.748-4.092 3.036-4.092 2.32 0 3.014 2.035 3.014 4.103m-1.65.1c0-.99-.022-3.059-1.342-3.059-1.386 0-1.397 2.068-1.397 3.08 0 .946.055 2.915 1.342 2.915 1.32 0 1.397-1.947 1.397-2.937"
				clipRule="evenodd"
			/>
			<path d="M8.14 16h1.627V8.047H8.381c-.693.65-1.155.968-2.046 1.276v1.353c.65-.23 1.287-.572 1.804-1.045z" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm14 1.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNumber10Square.iconName = "number10-square";

export default IconNumber10Square;
