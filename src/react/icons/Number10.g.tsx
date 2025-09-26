import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber10 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.506 6.722c2.954 0 3.836 2.59 3.836 5.222 0 2.688-.896 5.334-3.878 5.334-2.968 0-3.821-2.716-3.821-5.348 0-2.618.951-5.208 3.863-5.208m-6.48 10.376H6.953V8.99c-.658.602-1.47 1.037-2.296 1.33V8.6c1.134-.392 1.722-.798 2.604-1.624h1.765zm6.508-8.92c-1.764 0-1.778 2.632-1.778 3.92 0 1.204.07 3.71 1.708 3.71 1.68 0 1.778-2.478 1.778-3.738s-.028-3.892-1.708-3.892" />
		</svg>
	);
};

IconNumber10.iconName = "number10";

export default IconNumber10;
