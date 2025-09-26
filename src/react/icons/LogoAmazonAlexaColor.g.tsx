import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAmazonAlexaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#31C4F3"
				fillRule="evenodd"
				d="M12 2C6.477 2 2 6.477 2 12c0 5.07 3.774 9.26 8.666 9.911v-2.015c0-.568-.358-1.079-.896-1.26a7 7 0 0 1-4.768-6.805 6.975 6.975 0 0 1 7.07-6.83 7 7 0 0 1 6.922 7.26l-.002.059-.015.24-.007.077a6 6 0 0 1-.04.354l-.013.085c-.857 5.645-8.21 8.818-8.25 8.836Q11.321 22 12 22c5.522 0 10-4.477 10-10S17.521 2 12 2"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAmazonAlexaColor.iconName = "logo-amazon-alexa--color";

export default IconLogoAmazonAlexaColor;
