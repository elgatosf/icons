import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTint = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 14c0-4.564 4.628-9.127 6.844-11.05a1.75 1.75 0 0 1 2.312 0C15.372 4.872 20 9.435 20 14a8 8 0 1 1-16 0m1.5 0c0-1.805.934-3.768 2.3-5.627 1.342-1.827 2.962-3.366 4.027-4.291a.26.26 0 0 1 .173-.07.26.26 0 0 1 .173.07c1.065.925 2.685 2.464 4.027 4.29 1.235 1.68 2.116 3.446 2.274 5.103l-.004-.005-1 1a3.493 3.493 0 0 1-4.94 0 4.993 4.993 0 0 0-7.016-.044A7 7 0 0 1 5.5 14m.376 2.185a6.503 6.503 0 0 0 12.374-.395 4.993 4.993 0 0 1-6.78-.26 3.493 3.493 0 0 0-4.94 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTint.iconName = "tint";

export default IconTint;
