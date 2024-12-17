import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#4285F4"
				d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.872h5.382a4.6 4.6 0 0 1-2.01 3.01v2.518h3.246c1.891-1.746 2.982-4.31 2.982-7.355"
			/>
			<path
				fill="#34A853"
				d="M12 22c2.7 0 4.963-.89 6.618-2.418l-3.246-2.518c-.89.6-2.027.963-3.373.963-2.6 0-4.809-1.754-5.6-4.118H3.073v2.582c1.646 3.264 5.018 5.51 8.928 5.51"
			/>
			<path
				fill="#FBBC05"
				d="M6.4 13.9c-.2-.6-.318-1.236-.318-1.9s.118-1.3.318-1.9V7.518H3.073A9.9 9.9 0 0 0 2 12c0 1.618.39 3.136 1.073 4.482l2.59-2.018z"
			/>
			<path
				fill="#EA4335"
				d="M12 5.982c1.472 0 2.781.509 3.827 1.49L18.69 4.61C16.954 2.991 14.7 2 12 2 8.09 2 4.717 4.245 3.071 7.518L6.4 10.1c.79-2.364 3-4.118 5.6-4.118"
			/>
		</svg>
	);
};

IconLogoGoogleColor.iconName = "logo-google--color";

export default IconLogoGoogleColor;
