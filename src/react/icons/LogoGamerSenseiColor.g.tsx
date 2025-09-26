import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGamerSenseiColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#00F24B" d="M21 21H3V3h18v2H5v14h14V9H9v2h8v6H7v-2h8v-2H7V7h14z" />
		</svg>
	);
};

IconLogoGamerSenseiColor.iconName = "logo-gamer-sensei--color";

export default IconLogoGamerSenseiColor;
