import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPanelRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zm-8-.5H4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h10zm1.5 0H20a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPanelRight.iconName = "panel-right";

export default IconPanelRight;
