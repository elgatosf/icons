import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAnthropic = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m10.665 5.043 5.506 13.913h-3.08l-1.125-2.92h-5.76l-1.127 2.92H2L7.507 5.043zm-3.464 8.408h3.769l-1.884-4.89z"
				clipRule="evenodd"
			/>
			<path d="m16.23 5.044 5.507 13.912h-3.02L13.212 5.044z" />
		</svg>
	);
};

IconLogoAnthropic.iconName = "logo-anthropic";

export default IconLogoAnthropic;
