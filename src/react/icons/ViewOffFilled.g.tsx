import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconViewOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-3.797 3.798c1.825 1.347 3.085 3.032 3.74 4.04a1.61 1.61 0 0 1 0 1.764C20.502 14.763 17.174 19 12 19c-1.788 0-3.356-.506-4.693-1.247L3.28 21.78a.75.75 0 0 1-1.06 0m7.532-6.471a4 4 0 0 0 5.557-5.557l-1.092 1.092a2.5 2.5 0 0 1-3.373 3.373z"
				clipRule="evenodd"
			/>
			<path d="m8.07 12.75-3.21 3.212a16.6 16.6 0 0 1-2.583-3.08 1.61 1.61 0 0 1 0-1.764C3.499 9.237 6.827 5 12 5c1.177 0 2.258.22 3.24.58l-2.49 2.49a4 4 0 0 0-4.68 4.68" />
		</svg>
	);
};

IconViewOffFilled.iconName = "view-off--filled";

export default IconViewOffFilled;
