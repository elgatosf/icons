import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoLinkedinColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#0A66C2"
				d="M19.635 3H4.365C3.682 3 3.085 3.6 3 4.286v15.428C3 20.4 3.597 21 4.365 21h15.27c.683 0 1.28-.6 1.365-1.286V4.286C21 3.6 20.403 3 19.635 3M8.375 18.343H5.73V9.77h2.645zM7.01 8.57A1.533 1.533 0 0 1 5.474 7.03c0-.858.682-1.543 1.536-1.543.853 0 1.535.685 1.535 1.543S7.863 8.57 7.01 8.57m11.346 9.772H15.71v-4.2c0-1.029 0-2.314-1.365-2.314s-1.62 1.114-1.62 2.228v4.286H10.08V9.77h2.559v1.2c.512-.857 1.45-1.457 2.474-1.371 2.73 0 3.156 1.8 3.156 4.114z"
			/>
		</svg>
	);
};

IconLogoLinkedinColor.iconName = "logo-linkedin--color";

export default IconLogoLinkedinColor;
