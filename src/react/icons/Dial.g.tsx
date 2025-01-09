import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDial = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-1.5 0A8.5 8.5 0 1 1 5.483 6.543l5.237 5.237a.75.75 0 1 0 1.06-1.06L6.543 5.483A8.5 8.5 0 0 1 20.5 12"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDial.iconName = "dial";

export default IconDial;
