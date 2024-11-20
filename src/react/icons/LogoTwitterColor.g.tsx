import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoTwitterColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#1D9BF0"
				d="M19.83 7.983c.011.174.011.347.011.523C19.841 13.844 15.777 20 8.347 20v-.003a11.44 11.44 0 0 1-6.193-1.811q.48.057.962.058a8.1 8.1 0 0 0 5.017-1.733 4.045 4.045 0 0 1-3.774-2.805c.606.117 1.23.093 1.824-.07a4.04 4.04 0 0 1-3.24-3.96v-.05c.56.312 1.19.486 1.833.505a4.045 4.045 0 0 1-1.25-5.394 11.47 11.47 0 0 0 8.325 4.22 4.042 4.042 0 0 1 6.885-3.684 8.1 8.1 0 0 0 2.565-.98 4.06 4.06 0 0 1-1.776 2.233 8 8 0 0 0 2.32-.636 8.2 8.2 0 0 1-2.016 2.093"
			/>
		</svg>
	);
};

IconLogoTwitterColor.iconName = "logo-twitter--color";

export default IconLogoTwitterColor;
