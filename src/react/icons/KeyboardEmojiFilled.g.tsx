import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyboardEmojiFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.498a6.554 6.554 0 0 1-.422-3.5H5.75a.75.75 0 0 1 0-1.5h5.748a6.5 6.5 0 0 1 .941-1.58q-.205.079-.439.08a1.25 1.25 0 1 1 1.19-.865A6.48 6.48 0 0 1 17.5 11a6.5 6.5 0 0 1 5.5 3.034V6a2 2 0 0 0-2-2zm4.75 9.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M7 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.167 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M14.083 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M19.5 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.567-3.87a.5.5 0 0 1 .039.707 3.5 3.5 0 0 1-5.21.002.5.5 0 1 1 .744-.668 2.5 2.5 0 0 0 3.721-.002.5.5 0 0 1 .706-.039M19.75 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16 16.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyboardEmojiFilled.iconName = "keyboard-emoji--filled";

export default IconKeyboardEmojiFilled;
