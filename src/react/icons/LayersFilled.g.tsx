import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLayersFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M13 2.5774C12.3812 2.22013 11.6188 2.22013 11 2.5774L3.74167 6.768C2.40834 7.5378 2.40834 9.4623 3.74167 10.2321L11 14.4227C11.6188 14.78 12.3812 14.78 13 14.4227L20.2583 10.2321C21.5917 9.4623 21.5917 7.5378 20.2583 6.768L13 2.5774Z" />
			<path d="M10.25 15.7218L5.30381 12.8661L3.74167 13.768C2.40834 14.5378 2.40834 16.4623 3.74167 17.2321L11 21.4227C11.6188 21.78 12.3812 21.78 13 21.4227L20.2583 17.2321C21.5917 16.4623 21.5917 14.5378 20.2583 13.768L18.6962 12.8661L13.75 15.7218C12.6671 16.347 11.3329 16.347 10.25 15.7218Z" />
		</svg>
	);
};

IconLayersFilled.iconName = "layers--filled";

export default IconLayersFilled;
