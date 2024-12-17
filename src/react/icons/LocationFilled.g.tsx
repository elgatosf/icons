import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLocationFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M13.156 21.05C15.372 19.128 20 14.565 20 10a8 8 0 1 0-16 0c0 4.564 4.628 9.127 6.844 11.05.671.583 1.64.583 2.312 0M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLocationFilled.iconName = "location--filled";

export default IconLocationFilled;
