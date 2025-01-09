import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightMiniOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 20.72a.75.75 0 1 0 1.06 1.06L6.06 19H20a2 2 0 0 0 2-2v-3.5h.75a.75.75 0 0 0 0-1.5H22v-2h.75a.75.75 0 0 0 0-1.5H22V7a2 2 0 0 0-1.94-2l1.72-1.72a.75.75 0 0 0-1.06-1.06zM20 17.5H7.56l11-11H20a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5"
				clipRule="evenodd"
			/>
			<path d="m2.5 18.322 1.068-1.07A.5.5 0 0 1 3.5 17V7a.5.5 0 0 1 .5-.5h10.32l1.5-1.5H4a2 2 0 0 0-2 2v10c0 .507.188.97.5 1.322" />
		</svg>
	);
};

IconKeyLightMiniOff.iconName = "key-light-mini-off";

export default IconKeyLightMiniOff;
