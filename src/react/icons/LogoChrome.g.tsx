import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoChrome = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 22c5.523 0 10-4.477 10-10 0-1.407-.29-2.746-.815-3.96h-6.132a5.004 5.004 0 0 1 1.566 5.873 5 5 0 0 1-.296.6z" />
			<path d="M10.838 21.933C5.862 21.357 2 17.13 2 12c0-1.822.487-3.53 1.339-5.002l4.327 7.495a5 5 0 0 0 6.237 2.13z" />
			<path d="M12 2a9.99 9.99 0 0 0-8.021 4.027l3.065 5.31A5 5 0 0 1 12 7h8.662A10 10 0 0 0 12 2" />
			<path d="M13.515 15.659a3.96 3.96 0 1 1-3.03-7.317 3.96 3.96 0 0 1 3.03 7.317" />
		</svg>
	);
};

IconLogoChrome.iconName = "logo-chrome";

export default IconLogoChrome;
