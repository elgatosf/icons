import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChevronsDownSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.28 6.22a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06L12 10.94zM7.28 11.22a.75.75 0 0 0-1.06 1.06l4.794 4.794c.04-.613.164-1.203.362-1.759z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M19.5 15a.5.5 0 0 1 .5.5v2.828a.5.5 0 0 1-1 0v-1.621l-3.146 3.147a.5.5 0 1 1-.708-.707L18.293 16h-1.621a.5.5 0 1 1 0-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconChevronsDownSet.iconName = "chevrons-down-set";

export default IconChevronsDownSet;
