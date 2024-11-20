import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCompass = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.914 15.78c-.338.823.484 1.645 1.305 1.306l5.896-2.427a1 1 0 0 0 .544-.544l2.427-5.896c.339-.822-.483-1.644-1.305-1.305L9.886 9.34a1 1 0 0 0-.544.544zm8.329-7.022-4.594 1.891 2.702 2.702z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-1.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCompass.iconName = "compass";

export default IconCompass;
