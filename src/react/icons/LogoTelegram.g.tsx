import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoTelegram = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3.375 10.848q8.054-3.51 10.74-4.626c5.114-2.128 6.177-2.497 6.87-2.51.152-.002.493.036.713.215.186.151.238.355.262.499.025.143.055.47.031.725-.277 2.912-1.476 9.978-2.086 13.24-.259 1.38-.767 1.843-1.259 1.888-1.07.098-1.881-.707-2.917-1.386-1.621-1.062-2.537-1.724-4.11-2.76-1.818-1.199-.64-1.857.396-2.933.272-.282 4.984-4.568 5.075-4.957.011-.049.022-.23-.086-.326-.108-.095-.266-.063-.381-.037q-.244.056-7.768 5.135-1.102.757-1.997.738c-.658-.015-1.923-.372-2.863-.678-1.153-.375-2.07-.573-1.99-1.21q.062-.496 1.37-1.017"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoTelegram.iconName = "logo-telegram";

export default IconLogoTelegram;
