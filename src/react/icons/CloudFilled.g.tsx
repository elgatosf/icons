import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCloudFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M18.4944 10.2271C20.5258 10.8625 22 12.7591 22 15C22 17.7614 19.7614 20 17 20H7C4.23858 20 2 17.7614 2 15C2 12.7591 3.47417 10.8625 5.50562 10.2271C5.64864 6.76384 8.50156 4 12 4C15.4984 4 18.3514 6.76384 18.4944 10.2271Z" />
		</svg>
	);
};

IconCloudFilled.iconName = "cloud--filled";

export default IconCloudFilled;
