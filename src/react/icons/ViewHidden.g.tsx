import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconViewHidden = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M10.012 11h-.024a8 8 0 0 1-2.724-.482l-.013-.005A8 8 0 0 1 3.07 7a.5.5 0 0 0-.865.5A9 9 0 0 0 3.84 9.563l-1.294 1.542a.5.5 0 1 0 .766.643l1.294-1.543a9 9 0 0 0 1.85 1.068l-.689 1.893a.5.5 0 0 0 .94.341l.688-1.892a9 9 0 0 0 2.104.371V14a.5.5 0 1 0 1 0v-2.014a9 9 0 0 0 2.104-.37l.688 1.892a.5.5 0 0 0 .94-.342l-.689-1.893a9 9 0 0 0 1.85-1.068l1.295 1.543a.5.5 0 0 0 .766-.643l-1.295-1.543A9 9 0 0 0 17.794 7.5a.5.5 0 0 0-.866-.5 8 8 0 0 1-4.181 3.514l-.01.004q-.006 0-.011.003a8 8 0 0 1-2.714.48" />
		</svg>
	);
};

IconViewHidden.iconName = "view-hidden";

export default IconViewHidden;
