import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAvatarFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-6-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4 11.5a8.49 8.49 0 0 0 6.874-3.5A6 6 0 0 0 14 14.5h-4A6 6 0 0 0 5.126 17 8.49 8.49 0 0 0 12 20.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconAvatarFilled.iconName = "avatar--filled";

export default IconAvatarFilled;
