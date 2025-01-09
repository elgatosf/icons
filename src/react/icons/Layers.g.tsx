import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLayers = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11 2.577a2 2 0 0 1 2 0l7.258 4.191c1.334.77 1.334 2.694 0 3.464L13 14.422a2 2 0 0 1-2 0l-7.258-4.19c-1.334-.77-1.334-2.694 0-3.464zm1.25 1.3 7.258 4.19a.5.5 0 0 1 0 .866l-7.258 4.19a.5.5 0 0 1-.5 0l-7.258-4.19a.5.5 0 0 1 0-.866l7.258-4.19a.5.5 0 0 1 .5 0"
				clipRule="evenodd"
			/>
			<path d="M5.036 13.02a.75.75 0 1 1 .75 1.3l-1.294.747a.5.5 0 0 0 0 .866l7.258 4.19a.5.5 0 0 0 .5 0l7.258-4.19a.5.5 0 0 0 0-.866l-1.294-.747a.75.75 0 1 1 .75-1.3l1.294.748c1.334.77 1.334 2.694 0 3.464L13 21.422a2 2 0 0 1-2 0l-7.258-4.19c-1.334-.77-1.334-2.694 0-3.464z" />
		</svg>
	);
};

IconLayers.iconName = "layers";

export default IconLayers;
