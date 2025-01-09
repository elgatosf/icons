import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTriangle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m20.516 18.75-8.083-14a.5.5 0 0 0-.866 0l-8.083 14a.5.5 0 0 0 .433.75h16.166a.5.5 0 0 0 .433-.75M13.732 4c-.77-1.333-2.694-1.333-3.464 0L2.185 18c-.77 1.333.192 3 1.732 3h16.166c1.54 0 2.502-1.667 1.732-3z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTriangle.iconName = "triangle";

export default IconTriangle;
