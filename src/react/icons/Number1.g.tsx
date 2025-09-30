import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber1 = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M13.368 17.122H11.296V9.016C10.638 9.618 9.826 10.052 9 10.346V8.624C10.134 8.232 10.722 7.826 11.604 7H13.368V17.122Z" />
		</svg>
	);
};

IconNumber1.iconName = "number1";

export default IconNumber1;
