import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolumeMixerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.425 7a3.751 3.751 0 0 0-7.35 0H2.75a.75.75 0 0 0 0 1.5h2.325a3.751 3.751 0 0 0 7.35 0h8.825a.75.75 0 0 0 0-1.5zM2.75 15.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM17.537 11.057a.75.75 0 0 1 .463.693v9a.75.75 0 0 1-1.28.53L14.44 19h-.94a1.5 1.5 0 0 1-1.5-1.5V15a1.5 1.5 0 0 1 1.5-1.5h.94l2.28-2.28a.75.75 0 0 1 .817-.163M19.695 13.245a.75.75 0 0 1 1.06 0 4.25 4.25 0 0 1 0 6.01.75.75 0 0 1-1.06-1.06 2.75 2.75 0 0 0 0-3.89.75.75 0 0 1 0-1.06" />
		</svg>
	);
};

IconVolumeMixerFilled.iconName = "volume-mixer--filled";

export default IconVolumeMixerFilled;
