import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleDocs = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8 18H14V16.5H8V18Z" />
			<path d="M16 15.25H8V13.75H16V15.25Z" />
			<path d="M8 12.5H16V11H8V12.5Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.00098 1.99988H14.001L20.001 7.99988V19.9999C20.001 21.0999 19.101 21.9999 18.001 21.9999H5.99098C4.89098 21.9999 4.00098 21.0999 4.00098 19.9999L4.01098 3.99988C4.01098 2.89988 4.90098 1.99988 6.00098 1.99988ZM6.00098 3.99988V19.9999H18.001V8.99988H13.001V3.99988H6.00098Z"
			/>
		</svg>
	);
};

IconLogoGoogleDocs.iconName = "logo-google-docs";

export default IconLogoGoogleDocs;
