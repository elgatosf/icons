import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSystemFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fillRule="evenodd" d="M10.5 17.985a8 8 0 0 0 0-15.97zm-1-15.97a8 8 0 0 0 0 15.97z" clipRule="evenodd" />
		</svg>
	);
};

IconSystemFilled.iconName = "system--filled";

export default IconSystemFilled;
