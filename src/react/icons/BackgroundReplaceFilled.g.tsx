import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBackgroundReplaceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-.341a6.02 6.02 0 0 0-3.532-3.612 4 4 0 1 0-4.255 0A6.02 6.02 0 0 0 4.343 14H4a2 2 0 0 1-2-2z" />
			<path d="M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10 11a5 5 0 0 0-5 5 2 2 0 0 0 2 2h6a2 2 0 0 0 2-2 5 5 0 0 0-5-5" />
		</svg>
	);
};

IconBackgroundReplaceFilled.iconName = "background-replace--filled";

export default IconBackgroundReplaceFilled;
