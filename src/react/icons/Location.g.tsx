import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLocation = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M20 10c0 4.564-4.628 9.127-6.844 11.05a1.75 1.75 0 0 1-2.312 0C8.628 19.128 4 14.565 4 10a8 8 0 1 1 16 0m-1.5 0c0 1.805-.934 3.768-2.3 5.627-1.342 1.827-2.962 3.366-4.027 4.291a.26.26 0 0 1-.173.07.26.26 0 0 1-.173-.07c-1.065-.925-2.685-2.464-4.027-4.29-1.366-1.86-2.3-3.823-2.3-5.628a6.5 6.5 0 0 1 13 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLocation.iconName = "location";

export default IconLocation;
