import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<rect x={3} y={3} width={8.6} height={8.6} fill="#F35325" />
			<rect x={3} y={12.4} width={8.6} height={8.6} fill="#05A6F0" />
			<rect x={12.4004} y={12.4} width={8.6} height={8.6} fill="#FFBA08" />
			<rect x={12.4004} y={3} width={8.6} height={8.6} fill="#81BC06" />
		</svg>
	);
};

IconLogoMicrosoftColor.iconName = "logo-microsoft--color";

export default IconLogoMicrosoftColor;
