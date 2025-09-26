import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftTodoColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#195ABD"
				d="m5.342 8.555-2.848 2.849a.843.843 0 0 0 0 1.192l6.889 6.89c.33.329.863.329 1.193 0l2.848-2.849a.843.843 0 0 0 0-1.192l-6.89-6.89a.843.843 0 0 0-1.192 0"
			/>
			<path
				fill="url(#prefix__a)"
				d="m21.506 7.363-2.848-2.849a.843.843 0 0 0-1.193 0l-10.93 10.93a.843.843 0 0 0 0 1.193l2.848 2.848c.33.33.864.33 1.193 0l10.93-10.93a.843.843 0 0 0 0-1.192"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={7.959} x2={20.082} y1={18.061} y2={5.939} gradientUnits="userSpaceOnUse">
					<stop stopColor="#2987E6" />
					<stop offset={0.994} stopColor="#58C1F5" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftTodoColor.iconName = "logo-microsoft-todo--color";

export default IconLogoMicrosoftTodoColor;
