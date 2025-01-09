import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolumeMixer = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.75 4a3.75 3.75 0 0 1 3.675 3h8.825a.75.75 0 0 1 0 1.5h-8.825a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h2.325c.347-1.712 1.86-3 3.675-3m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
				clipRule="evenodd"
			/>
			<path d="M2 16.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" />
			<path
				fillRule="evenodd"
				d="M17.537 11.057a.75.75 0 0 1 .463.693v9a.75.75 0 0 1-1.28.53L14.44 19h-.94a1.5 1.5 0 0 1-1.5-1.5V15a1.5 1.5 0 0 1 1.5-1.5h.94l2.28-2.28a.75.75 0 0 1 .817-.163M16.5 13.561l-1.22 1.22a.75.75 0 0 1-.53.219H13.5v2.5h1.25a.75.75 0 0 1 .53.22l1.22 1.22z"
				clipRule="evenodd"
			/>
			<path d="M20.755 13.245a.75.75 0 0 0-1.06 1.06 2.75 2.75 0 0 1 0 3.89.75.75 0 0 0 1.06 1.06 4.25 4.25 0 0 0 0-6.01" />
		</svg>
	);
};

IconVolumeMixer.iconName = "volume-mixer";

export default IconVolumeMixer;
