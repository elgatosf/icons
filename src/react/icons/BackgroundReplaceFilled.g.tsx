import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBackgroundReplaceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5.53 2.22a.75.75 0 0 1 0 1.06L3.28 5.53a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0M9.53 2.22a.75.75 0 0 1 0 1.06L3.28 9.53a.75.75 0 0 1-1.06-1.06l6.25-6.25a.75.75 0 0 1 1.06 0M6.28 9.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0M11.47 4.28a.75.75 0 0 1 0-1.06l.997-.997a.75.75 0 1 1 1.06 1.06l-.996.998a.75.75 0 0 1-1.061 0M7.132 12.618a.75.75 0 0 1 0 1.06L3.28 17.53a.75.75 0 1 1-1.06-1.06l3.851-3.852a.75.75 0 0 1 1.06 0M14.617 5.133a.75.75 0 0 1 0-1.06L16.47 2.22a.75.75 0 1 1 1.06 1.06l-1.853 1.853a.75.75 0 0 1-1.06 0M19.234 17.016a.75.75 0 0 1 0-1.06l1.486-1.486a.75.75 0 1 1 1.06 1.06l-1.486 1.486a.75.75 0 0 1-1.06 0M17.287 14.963a.75.75 0 0 1 0-1.06l3.433-3.433a.75.75 0 1 1 1.06 1.06l-3.432 3.433a.75.75 0 0 1-1.06 0M17.72 10.53a.75.75 0 0 1 0-1.061l3-3a.75.75 0 1 1 1.06 1.061l-2.999 3a.75.75 0 0 1-1.06 0M21.78 2.22a.75.75 0 0 1 0 1.06l-3.943 3.944a.75.75 0 1 1-1.06-1.06L20.72 2.22a.75.75 0 0 1 1.06 0"
				clipRule="evenodd"
			/>
			<path d="M16 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0M5 20a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2" />
		</svg>
	);
};

IconBackgroundReplaceFilled.iconName = "background-replace--filled";

export default IconBackgroundReplaceFilled;
