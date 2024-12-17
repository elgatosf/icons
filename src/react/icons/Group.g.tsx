import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGroup = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 5A5.5 5.5 0 0 0 2 18a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 5.5 5.5 0 0 0-5.5-5.5m-4 5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-8 0"
				clipRule="evenodd"
			/>
			<path d="M14.466 14.555A4 4 0 0 1 20.5 18a.5.5 0 0 1-.5.5h-4.937a.75.75 0 0 0 0 1.5H20a2 2 0 0 0 2-2 5.5 5.5 0 0 0-8.298-4.736.75.75 0 0 0 .764 1.29Z" />
		</svg>
	);
};

IconGroup.iconName = "group";

export default IconGroup;
