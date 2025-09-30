import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAnthropic = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10.665 5.04297L16.1709 18.9561H13.0918L11.9658 16.0352H6.20508L5.0791 18.9561H2L7.50684 5.04297H10.665ZM7.20117 13.4512H10.9697L9.08594 8.56152L7.20117 13.4512Z"
			/>
			<path d="M16.2305 5.04395L21.7373 18.9561H18.7178L13.2109 5.04395H16.2305Z" />
		</svg>
	);
};

IconLogoAnthropic.iconName = "logo-anthropic";

export default IconLogoAnthropic;
