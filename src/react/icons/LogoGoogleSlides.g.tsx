import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSlides = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fillRule="evenodd" d="M7 11h10v7H7zm8.5 5.5v-4h-7v4z" clipRule="evenodd" />
			<path
				fillRule="evenodd"
				d="M6.001 2h8l6 6v12c0 1.1-.9 2-2 2H5.991c-1.1 0-1.99-.9-1.99-2l.01-16c0-1.1.89-2 1.99-2m0 2v16h12V9h-5V4z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleSlides.iconName = "logo-google-slides";

export default IconLogoGoogleSlides;
