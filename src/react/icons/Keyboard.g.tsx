import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyboard = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.75 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M13.25 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M17.5 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5 15.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75M19.5 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5.75 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M11.167 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M14.083 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
			<path
				fillRule="evenodd"
				d="M3 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm18 1.5H3a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyboard.iconName = "keyboard";

export default IconKeyboard;
