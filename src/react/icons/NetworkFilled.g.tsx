import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNetworkFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.5 5.937a2 2 0 1 0-1 0V9h-5a.5.5 0 0 0-.5.5v3.563a2 2 0 1 0 1 0V10h4.5v3.063a2 2 0 1 0 1 0V10H15v3.063a2 2 0 1 0 1 0V9.5a.5.5 0 0 0-.5-.5h-5z" />
		</svg>
	);
};

IconNetworkFilled.iconName = "network--filled";

export default IconNetworkFilled;
