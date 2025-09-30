import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGamerSenseiColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				d="M21 21H3V3H21V5.00001H4.99999V19.0001H19V9.00004H8.99998V11.0001H17V17.0001H7V15.0001H15V13.0001H7V7.00003H21V21Z"
				fill="#00F24B"
			/>
		</svg>
	);
};

IconLogoGamerSenseiColor.iconName = "logo-gamer-sensei--color";

export default IconLogoGamerSenseiColor;
