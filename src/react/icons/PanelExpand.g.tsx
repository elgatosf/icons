import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPanelExpand = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.72 8.22a.75.75 0 0 0 0 1.06L15.44 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0" />
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7-.5h9a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-9zm-1.5 0H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h3.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPanelExpand.iconName = "panel-expand";

export default IconPanelExpand;
