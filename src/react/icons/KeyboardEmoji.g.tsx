import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyboardEmoji = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.498a6.5 6.5 0 0 1-.422-1.5H3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5v6.376a6.5 6.5 0 0 1 1.5 1.658V6a2 2 0 0 0-2-2z" />
			<path d="M11.076 16.5c.081-.523.224-1.026.422-1.5H5.75a.75.75 0 0 0 0 1.5zM13.19 12.635q-.409.36-.75.786-.207.078-.44.079a1.25 1.25 0 1 1 1.19-.865M7 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M18.25 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M9 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9.917 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15.333 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.567-3.87a.5.5 0 0 1 .039.707 3.5 3.5 0 0 1-5.21.002.5.5 0 1 1 .744-.668 2.5 2.5 0 0 0 3.721-.002.5.5 0 0 1 .706-.039M19.75 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16 16.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyboardEmoji.iconName = "keyboard-emoji";

export default IconKeyboardEmoji;
