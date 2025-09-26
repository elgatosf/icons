import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVisualStudioCode = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16.628 21.942a1.25 1.25 0 0 1-.883-.364l-7.872-7.183-3.425 2.6a.83.83 0 0 1-.508.17h-.006a.83.83 0 0 1-.561-.217l-1.1-1.001a.833.833 0 0 1-.001-1.232L5.247 12 2.272 9.285a.833.833 0 0 1 0-1.232l1.101-1a.83.83 0 0 1 .566-.217.83.83 0 0 1 .51.169l3.424 2.6 7.872-7.182a1.25 1.25 0 0 1 1.432-.242l4.116 1.98A1.25 1.25 0 0 1 22 5.287v13.426a1.25 1.25 0 0 1-.707 1.126l-4.116 1.98a1.24 1.24 0 0 1-.549.123m.366-14.47L11.028 12l5.966 4.528z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoVisualStudioCode.iconName = "logo-visual-studio-code";

export default IconLogoVisualStudioCode;
