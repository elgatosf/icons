import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTemplate = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11.5-.5H19a.5.5 0 0 1 .5.5v4.5h-5zm-1.5 0H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h8zm1.5 15H19a.5.5 0 0 0 .5-.5v-8h-5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTemplate.iconName = "template";

export default IconTemplate;
