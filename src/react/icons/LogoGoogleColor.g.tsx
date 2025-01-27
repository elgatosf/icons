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
				d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.873h5.382a4.6 4.6 0 0 1-2.01 3.009v2.518h3.246c1.891-1.746 2.982-4.31 2.982-7.355"
			/>
			<path
				fill="#34A853"
				d="M12 22c2.7 0 4.964-.89 6.618-2.418l-3.245-2.518c-.891.6-2.027.963-3.373.963-2.6 0-4.81-1.754-5.6-4.118H3.073v2.582C4.718 19.755 8.09 22 12 22"
			/>
			<path
				fill="#FBBC05"
				d="M6.4 13.9c-.2-.6-.318-1.236-.318-1.9s.118-1.3.318-1.9V7.518H3.073A9.9 9.9 0 0 0 2 12c0 1.618.39 3.136 1.073 4.482l2.59-2.018z"
			/>
			<path
				fill="#EA4335"
				d="M12 5.982c1.473 0 2.782.509 3.827 1.49l2.864-2.863C16.955 2.991 14.7 2 12 2 8.09 2 4.718 4.245 3.073 7.518L6.4 10.1c.79-2.364 3-4.118 5.6-4.118"
			/>
		</svg>
	);
};

IconLogoGoogleColor.iconName = "logo-google--color";

export default IconLogoGoogleColor;
