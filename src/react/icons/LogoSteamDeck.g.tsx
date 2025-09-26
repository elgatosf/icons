import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSteamDeck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.5 2c5.523 0 10 4.477 10 10s-4.477 10-10 10v-3.59a6.41 6.41 0 1 0 0-12.82z" />
			<path d="M9.5 7.01a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
		</svg>
	);
};

IconLogoSteamDeck.iconName = "logo-steam-deck";

export default IconLogoSteamDeck;
