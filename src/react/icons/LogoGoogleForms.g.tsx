import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleForms = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16 18h-5v-1.5h5zM11 15.25h5v-1.5h-5zM16 12.5h-5V11h5zM9 12.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 18.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
			<path
				fillRule="evenodd"
				d="M14.001 2h-8c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.89 2 1.99 2h12.01c1.1 0 2-.9 2-2V8zm-8 18V4h7v5h5v11z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleForms.iconName = "logo-google-forms";

export default IconLogoGoogleForms;
