import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoEclipse = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.718 2.01C6.781 2.747 2.986 6.946 2.986 12s3.795 9.252 8.733 9.99l-.027.002a9 9 0 0 1-.343.008c-5.54 0-10.033-4.477-10.033-10S5.808 2 11.35 2q.173.001.344.008z" />
			<path d="M22.315 9.239q-.655-2.24-2.434-4.02-2.235-2.233-5.21-2.682a10 10 0 0 0-1.553-.116q-3.962 0-6.78 2.798Q4.57 7 3.92 9.24zM22.558 10.31q.096.563.125 1.154H3.554q.03-.59.125-1.154zM3.92 14.76q.65 2.234 2.417 4.001 2.82 2.818 6.78 2.817.792 0 1.538-.114 2.985-.45 5.225-2.703 1.779-1.768 2.434-4zM22.558 13.689a10 10 0 0 0 .126-1.154H3.554q.03.59.124 1.154z" />
		</svg>
	);
};

IconLogoEclipse.iconName = "logo-eclipse";

export default IconLogoEclipse;
