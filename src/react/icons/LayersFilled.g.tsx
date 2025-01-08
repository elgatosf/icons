import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLayersFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13 2.577a2 2 0 0 0-2 0L3.742 6.768c-1.334.77-1.334 2.694 0 3.464L11 14.422a2 2 0 0 0 2 0l7.258-4.19c1.334-.77 1.334-2.694 0-3.464z" />
			<path d="m10.25 15.722-4.946-2.856-1.562.902c-1.334.77-1.334 2.694 0 3.464L11 21.422a2 2 0 0 0 2 0l7.258-4.19c1.334-.77 1.334-2.694 0-3.464l-1.562-.902-4.946 2.856a3.5 3.5 0 0 1-3.5 0" />
		</svg>
	);
};

IconLayersFilled.iconName = "layers--filled";

export default IconLayersFilled;
