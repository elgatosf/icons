import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleDocs = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8 18h6v-1.5H8zM16 15.25H8v-1.5h8zM8 12.5h8V11H8z" />
			<path
				fillRule="evenodd"
				d="M6.001 2h8l6 6v12c0 1.1-.9 2-2 2H5.991c-1.1 0-1.99-.9-1.99-2l.01-16c0-1.1.89-2 1.99-2m0 2v16h12V9h-5V4z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleDocs.iconName = "logo-google-docs";

export default IconLogoGoogleDocs;
