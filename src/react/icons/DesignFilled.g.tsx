import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDesignFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m15.414 3.414 1.172 1.172a2 2 0 0 1 0 2.828l-1.232 1.232-4-4 1.232-1.232a2 2 0 0 1 2.828 0M10.647 5.354l-6.313 6.312a2 2 0 0 0-.483.782l-.902 2.706c-.391 1.172.724 2.288 1.897 1.897l2.706-.902a2 2 0 0 0 .782-.483l6.313-6.312zM4.585 3.414a2 2 0 0 1 2.829 0l1.171 1.172a1 1 0 0 1 0 1.414L6 8.586a1 1 0 0 1-1.415 0l-.232-.232 2-2a.5.5 0 0 0-.707-.708l-2 2-.232-.232a2 2 0 0 1 0-2.828zM16.586 15.414a2 2 0 0 0 0-2.828L15.06 11.06a.5.5 0 0 0-.707 0l-3.293 3.293a.5.5 0 0 0 0 .707l.586.586 2-2a.5.5 0 0 1 .708.707l-2 2 .232.232a2 2 0 0 0 2.828 0z" />
		</svg>
	);
};

IconDesignFilled.iconName = "design--filled";

export default IconDesignFilled;
