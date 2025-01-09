import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyboardFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm2.75 11a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm2-1.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M7 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.167 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m2.083-3.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m2.167 3.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m3.25-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyboardFilled.iconName = "keyboard--filled";

export default IconKeyboardFilled;
