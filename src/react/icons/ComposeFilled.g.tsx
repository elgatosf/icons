import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconComposeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m21.086 4.586-1.672-1.672a2 2 0 0 0-2.828 0L15.28 4.22l4.5 4.5 1.306-1.306a2 2 0 0 0 0-2.828M8.392 11.108 14.22 5.28l4.5 4.5-5.828 5.828a2 2 0 0 1-.93.526l-3.845.962a1 1 0 0 1-1.213-1.213l.962-3.846a2 2 0 0 1 .526-.929" />
			<path d="M12.25 3a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-7.25a.75.75 0 0 1 1.5 0V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
		</svg>
	);
};

IconComposeFilled.iconName = "compose--filled";

export default IconComposeFilled;
