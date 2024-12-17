import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAvatar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m6.874-5a8.5 8.5 0 1 0-13.749 0A6 6 0 0 1 10 14.5h4c2.008 0 3.785.986 4.874 2.5m-1.025 1.168A4.5 4.5 0 0 0 14 16h-4a4.5 4.5 0 0 0-3.85 2.168A8.47 8.47 0 0 0 12 20.5a8.47 8.47 0 0 0 5.85-2.332Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconAvatar.iconName = "avatar";

export default IconAvatar;
