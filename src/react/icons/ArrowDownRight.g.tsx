import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowDownRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M5.146 5.146a.5.5 0 0 1 .708 0L14 13.293V8a.5.5 0 0 1 1 0v6.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1 0-1h5.293L5.146 5.854a.5.5 0 0 1 0-.708"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconArrowDownRight.iconName = "arrow-down-right";

export default IconArrowDownRight;
