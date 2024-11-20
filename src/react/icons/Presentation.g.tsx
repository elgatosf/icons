import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPresentation = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 6.5a4 4 0 1 0 4 4 .75.75 0 0 0-.75-.75h-2.5v-2.5A.75.75 0 0 0 12 6.5m-1.389 1.921a2.5 2.5 0 0 1 .639-.306v3.135h3.135a2.5 2.5 0 0 1-2.873 1.702 2.5 2.5 0 0 1-.9-4.53Z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M1 4.75A.75.75 0 0 1 1.75 4h20.5a.75.75 0 0 1 0 1.5H21V15a2 2 0 0 1-2 2h-6.25v.94l2.78 2.78a.75.75 0 1 1-1.06 1.06L12 19.31l-2.47 2.47a.75.75 0 0 1-1.06-1.06l2.78-2.78V17H5a2 2 0 0 1-2-2V5.5H1.75A.75.75 0 0 1 1 4.75m3.5.75h15V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPresentation.iconName = "presentation";

export default IconPresentation;
