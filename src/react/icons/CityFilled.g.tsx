import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCityFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.75 1.75a.75.75 0 0 0-1.5 0V3H9.5a2 2 0 0 0-2 2v3.535a3.5 3.5 0 0 1 3 3.465v10h3V9.203c0-1.782 1.456-2.998 3-3.006V5a2 2 0 0 0-2-2h-1.75z" />
			<path d="M15 22h4a2 2 0 0 0 2-2v-8.063a2 2 0 0 0-.72-1.537l-2.82-2.35a1.48 1.48 0 0 0-.96-.35c-.772.004-1.5.612-1.5 1.503zM7.5 10.063A2 2 0 0 1 9 12v10H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2q.26 0 .5.063" />
		</svg>
	);
};

IconCityFilled.iconName = "city--filled";

export default IconCityFilled;
