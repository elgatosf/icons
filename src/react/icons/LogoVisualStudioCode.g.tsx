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
				d="M16.625 21.948a1.25 1.25 0 0 1-.883-.365l-7.877-7.186-3.427 2.601a.83.83 0 0 1-.508.17h-.007a.83.83 0 0 1-.56-.217L2.26 15.949a.834.834 0 0 1-.001-1.232L5.238 12 2.26 9.283a.834.834 0 0 1 0-1.232l1.102-1.002a.83.83 0 0 1 .567-.217.83.83 0 0 1 .509.17l3.427 2.601 7.877-7.186a1.24 1.24 0 0 1 .892-.365c.183 0 .368.04.54.123l4.119 1.981A1.25 1.25 0 0 1 22 5.283v13.434a1.25 1.25 0 0 1-.707 1.127l-4.118 1.981c-.17.082-.35.122-.53.123zm.366-14.48L11.022 12l5.97 4.531z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoVisualStudioCode.iconName = "logo-visual-studio-code";

export default IconLogoVisualStudioCode;
