import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTagFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3h6.172a2 2 0 0 1 1.414.586l9 9a2 2 0 0 1 0 2.828l-6.172 6.172a2 2 0 0 1-2.828 0l-9-9A2 2 0 0 1 3 11.172V5a2 2 0 0 1 2-2m1 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTagFilled.iconName = "tag--filled";

export default IconTagFilled;
