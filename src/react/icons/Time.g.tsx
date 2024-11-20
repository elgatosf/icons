import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTime = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.75 5.75a.75.75 0 0 0-1.5 0V12c0 .199.079.39.22.53l3.25 3.25a.75.75 0 1 0 1.06-1.06l-3.03-3.03z" />
			<path
				fillRule="evenodd"
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-1.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTime.iconName = "time";

export default IconTime;
