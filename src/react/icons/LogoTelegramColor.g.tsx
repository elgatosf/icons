import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoTelegramColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="url(#prefix__a)" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M6.528 11.895Q10.9 9.99 12.36 9.382c2.777-1.155 3.354-1.355 3.73-1.362.083-.001.268.02.387.116a.42.42 0 0 1 .143.271c.013.078.03.255.016.394-.15 1.581-.801 5.418-1.132 7.19-.14.749-.417 1-.684 1.025-.58.053-1.022-.384-1.584-.753-.88-.577-1.377-.936-2.232-1.499-.987-.65-.347-1.008.216-1.593.147-.153 2.706-2.48 2.755-2.691.006-.026.012-.125-.046-.177-.059-.052-.145-.034-.207-.02q-.133.03-4.219 2.788-.598.411-1.084.4c-.357-.007-1.044-.201-1.554-.367-.627-.204-1.124-.311-1.081-.657q.033-.27.744-.552"
				clipRule="evenodd"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={1002} x2={1002} y1={2} y2={1987.17} gradientUnits="userSpaceOnUse">
					<stop stopColor="#2AABEE" />
					<stop offset={1} stopColor="#229ED9" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoTelegramColor.iconName = "logo-telegram--color";

export default IconLogoTelegramColor;
