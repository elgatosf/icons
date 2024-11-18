import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconDialRotateCcw = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4.75 2.25A.75.75 0 0 1 5.5 3v2.4a10 10 0 0 1 13.571.529.75.75 0 1 1-1.06 1.06 8.5 8.5 0 0 0-12.021 0l-.71.71A.75.75 0 0 1 4 7.17V3a.75.75 0 0 1 .75-.75" />
			<path
				fillRule="evenodd"
				d="M12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1.5a5.5 5.5 0 1 0-3.323-9.883l3.103 3.103a.75.75 0 1 1-1.06 1.06L7.617 9.677A5.5 5.5 0 0 0 12 18.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDialRotateCcw.iconName = "dial-rotate-ccw";

export default IconDialRotateCcw;
