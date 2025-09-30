import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoTwitch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.25 6.12502H15.75V10.625H17.25V6.12502Z" />
			<path d="M11.6251 6.12502H13.1251V10.625H11.6251V6.12502Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 5.75L6.75 2H21V12.5L14.25 19.25H11.25L7.5 23V19.25H3V5.75ZM16.5 14.75L19.5 11.75V3.5H7.5L7.49993 14.75H10.8749V17.375L13.5 14.75L16.5 14.75Z"
			/>
		</svg>
	);
};

IconLogoTwitch.iconName = "logo-twitch";

export default IconLogoTwitch;
