import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindow = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-.5h16a.5.5 0 0 1 .5.5v1.5h-17V6a.5.5 0 0 1 .5-.5M3.5 9v9a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V9z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWindow.iconName = "window";

export default IconWindow;
