import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSlides = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.00049 10.9999H17.0005V17.9999H7.00049V10.9999ZM15.5005 16.4999V12.4999H8.50049V16.4999H15.5005Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.00098 1.99988H14.001L20.001 7.99988V19.9999C20.001 21.0999 19.101 21.9999 18.001 21.9999H5.99098C4.89098 21.9999 4.00098 21.0999 4.00098 19.9999L4.01098 3.99988C4.01098 2.89988 4.90098 1.99988 6.00098 1.99988ZM6.00098 3.99988V19.9999H18.001V8.99988H13.001V3.99988H6.00098Z"
			/>
		</svg>
	);
};

IconLogoGoogleSlides.iconName = "logo-google-slides";

export default IconLogoGoogleSlides;
