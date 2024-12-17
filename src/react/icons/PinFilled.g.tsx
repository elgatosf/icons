import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPinFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.22 2.22a.75.75 0 0 1 1.06 0l9.5 9.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22-6.94 6.94 1.22 1.22a.75.75 0 1 1-1.06 1.06L8.5 16.56l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22-4.22-4.22a.75.75 0 1 1 1.06-1.06l1.22 1.22 6.94-6.94-1.22-1.22a.75.75 0 0 1 0-1.06"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPinFilled.iconName = "pin--filled";

export default IconPinFilled;
