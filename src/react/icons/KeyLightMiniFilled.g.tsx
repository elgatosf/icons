import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightMiniFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19 8H5v8h14z" />
			<path
				fillRule="evenodd"
				d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5h.75a.75.75 0 0 1 0 1.5H22v2h.75a.75.75 0 0 1 0 1.5H22V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-.5h16a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightMiniFilled.iconName = "key-light-mini--filled";

export default IconKeyLightMiniFilled;
