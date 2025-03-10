import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMouse = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.51 3.994a2.32 2.32 0 0 1 1.34-1.377l.973-.379a8.75 8.75 0 0 1 6.354 0l.973.379a2.32 2.32 0 0 1 1.34 1.377l.565 1.577a20.1 20.1 0 0 1 .715 11.064C18.088 19.767 15.26 22 12.055 22c-3.27 0-6.158-2.306-6.855-5.5a19.6 19.6 0 0 1 .699-10.8zm9.567.506.565 1.577c.515 1.435.848 2.92.998 4.423h-4.89V3.18c.64.066 1.273.218 1.883.456l.972.379c.22.085.393.262.472.485M11.25 3.18v7.32H6.34c.148-1.458.472-2.9.971-4.293L7.923 4.5c.08-.223.251-.4.471-.485l.973-.38a7.3 7.3 0 0 1 1.883-.455M6.252 12a18 18 0 0 0 .413 4.18c.546 2.499 2.82 4.32 5.39 4.32 2.515 0 4.72-1.756 5.25-4.185.31-1.424.451-2.872.424-4.315z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMouse.iconName = "mouse";

export default IconMouse;
