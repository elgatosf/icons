import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDesign = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M3.85 12.448a2 2 0 0 1 .484-.782l8.252-8.252a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828l-8.252 8.252a2 2 0 0 1-.782.483l-2.706.902c-1.173.391-2.288-.724-1.897-1.897zM7.237 15.2l-2.706.902a.5.5 0 0 1-.633-.633l.902-2.706a1 1 0 0 1 .242-.39l6.313-6.313 2.585 2.585-6.312 6.313a1 1 0 0 1-.391.242m4.825-9.847 2.585 2.585 1.233-1.232a1 1 0 0 0 0-1.414L14.707 4.12a1 1 0 0 0-1.414 0z"
				clipRule="evenodd"
			/>
			<path d="M5.646 8.232a.5.5 0 1 1-.707.707L3.414 7.414a2 2 0 0 1 0-2.828l1.171-1.172a2 2 0 0 1 2.829 0L8.939 4.94a.5.5 0 0 1-.707.707L6.707 4.121a1 1 0 0 0-1.414 0L4.12 5.293a1 1 0 0 0 0 1.414l.233.233 1.292-1.294a.5.5 0 1 1 .708.708L5.06 7.647zM16.586 15.414a2 2 0 0 0 0-2.828L15.06 11.06a.5.5 0 1 0-.707.707l1.525 1.525a1 1 0 0 1 0 1.414l-1.171 1.172a1 1 0 0 1-1.414 0l-.232-.232 1.293-1.293a.5.5 0 0 0-.708-.708l-1.293 1.293-.585-.585a.5.5 0 1 0-.708.707l1.525 1.525a2 2 0 0 0 2.829 0z" />
		</svg>
	);
};

IconDesign.iconName = "design";

export default IconDesign;
