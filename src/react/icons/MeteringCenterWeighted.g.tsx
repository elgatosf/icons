import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMeteringCenterWeighted = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.614 8.025A.75.75 0 0 0 4.64 7.75a8.5 8.5 0 0 1 14.722 0 .75.75 0 0 0 1.3-.75A10 10 0 0 0 3.34 7a.75.75 0 0 0 .274 1.025M3.614 15.976a.75.75 0 0 1 1.025.274 8.5 8.5 0 0 0 14.722 0 .75.75 0 0 1 1.3.75A10 10 0 0 1 3.34 17a.75.75 0 0 1 .274-1.024" />
			<path
				fillRule="evenodd"
				d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMeteringCenterWeighted.iconName = "metering-center-weighted";

export default IconMeteringCenterWeighted;
