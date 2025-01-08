import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPresentationFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M1 3.75A.75.75 0 0 1 1.75 3h20.5a.75.75 0 0 1 0 1.5H21V15a2 2 0 0 1-2 2h-6.25v.94l2.78 2.78a.75.75 0 1 1-1.06 1.06L12 19.31l-2.47 2.47a.75.75 0 0 1-1.06-1.06l2.78-2.78V17H5a2 2 0 0 1-2-2V4.5H1.75A.75.75 0 0 1 1 3.75m7 4.5a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 8.25M8.75 11a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPresentationFilled.iconName = "presentation--filled";

export default IconPresentationFilled;
