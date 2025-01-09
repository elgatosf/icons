import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlugin = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5.5 8v2a.5.5 0 0 0 .5.5h.5a3 3 0 1 1 0 6H6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5a2 2 0 0 1-2-2V5a1.5 1.5 0 0 0-3 0v.5a2 2 0 0 1-2 2H6a.5.5 0 0 0-.5.5M6 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 1 0 3H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1-.5-.5V5a3 3 0 1 0-6 0v.5a.5.5 0 0 1-.5.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPlugin.iconName = "plugin";

export default IconPlugin;
