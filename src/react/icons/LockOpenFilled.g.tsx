import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLockOpenFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10.756 2.997A3.25 3.25 0 0 1 15.25 6v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1.25V6a4.75 4.75 0 0 0-8.864-2.375.75.75 0 1 0 1.3.75 3.25 3.25 0 0 1 1.57-1.378M13.5 14.5a1.5 1.5 0 0 1-.75 1.3v1.45a.75.75 0 0 1-1.5 0V15.8a1.5 1.5 0 1 1 2.25-1.3"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLockOpenFilled.iconName = "lock-open--filled";

export default IconLockOpenFilled;
