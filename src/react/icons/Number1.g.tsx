import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber1 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.368 17.122h-2.072V9.016c-.658.602-1.47 1.036-2.296 1.33V8.624c1.134-.392 1.722-.798 2.604-1.624h1.764z" />
		</svg>
	);
};

IconNumber1.iconName = "number1";

export default IconNumber1;
