import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightMini = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3.5h.75a.75.75 0 0 0 0-1.5H22v-2h.75a.75.75 0 0 0 0-1.5H22V7a2 2 0 0 0-2-2zm16 1.5H4a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightMini.iconName = "key-light-mini";

export default IconKeyLightMini;
