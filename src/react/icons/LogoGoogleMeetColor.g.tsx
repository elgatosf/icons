import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleMeetColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fill="#00AC47"
				d="M17.25 15.244V9.269l.62-1.29 3.097-2.454A.627.627 0 0 1 22 6.01v11.73c0 .54-.633.831-1.046.485z"
			/>
			<path fill="#FE2C25" d="m7 3.75-5 5h5z" />
			<path fill="#2684FC" d="M7 8.75H2v6.5h5z" />
			<path fill="#0066DA" d="M2 15.25v3.333c0 .917.75 1.667 1.667 1.667H7v-5z" />
			<path fill="#FFBA00" d="M17.875 5.398c0-.907-.734-1.648-1.631-1.648H7v5h6.125V12l4.75-.15z" />
			<path fill="#00AC47" d="M13.125 15.25H7v5h9.244c.897 0 1.631-.74 1.631-1.645V12h-4.75z" />
			<path fill="#00832D" d="M17.875 8v7.75L13.125 12z" />
		</svg>
	);
};

IconLogoGoogleMeetColor.iconName = "logo-google-meet--color";

export default IconLogoGoogleMeetColor;
