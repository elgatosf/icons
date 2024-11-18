import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGamerSensei = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21 21H3V3h18v2H5v14h14V9H9v2h8v6H7v-2h8v-2H7V7h14z" />
		</svg>
	);
};

IconLogoGamerSensei.iconName = "logo-gamer-sensei";

export default IconLogoGamerSensei;
