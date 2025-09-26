import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAudioTechnica = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17.313 18.94H6.688L12.001 3.4zm-5.212-.782 4.118-.004-2.074-5.996zm-4.329-.004h3.502l2.463-7.236-1.736-5.099z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M12.001 2C17.522 2 22 6.477 22 11.999S17.522 22 12.001 22C6.477 22.001 2 17.523 2 11.999 2 6.477 6.478 2 12.001 2m0 .792c-5.092 0-9.217 4.126-9.217 9.214 0 5.09 4.125 9.214 9.217 9.214a9.213 9.213 0 0 0 9.214-9.214A9.214 9.214 0 0 0 12 2.792"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAudioTechnica.iconName = "logo-audio-technica";

export default IconLogoAudioTechnica;
