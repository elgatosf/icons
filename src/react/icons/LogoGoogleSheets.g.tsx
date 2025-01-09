import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSheets = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7 18h10v-7H7zm8.5-4.25V12.5h-2.75v1.25zm0 1.5h-2.75v1.25h2.75zm-4.25-1.5V12.5H8.5v1.25zm-2.75 1.5h2.75v1.25H8.5z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M6.001 2h8l6 6v12c0 1.1-.9 2-2 2H5.991c-1.1 0-1.99-.9-1.99-2l.01-16c0-1.1.89-2 1.99-2m0 2v16h12V9h-5V4z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleSheets.iconName = "logo-google-sheets";

export default IconLogoGoogleSheets;
