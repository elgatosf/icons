import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAspectRatioFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2V10a2 2 0 0 0-2-2H2z" />
			<path d="M14 20h2.5V10a.5.5 0 0 0-.5-.5h-2zM12.5 9.5H2V18a2 2 0 0 0 2 2h8.5z" />
		</svg>
	);
};

IconAspectRatioFilled.iconName = "aspect-ratio--filled";

export default IconAspectRatioFilled;
