import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNfc = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.002 6.225a.75.75 0 0 1 1.024.275 11 11 0 0 1 0 11 .75.75 0 0 1-1.299-.75 9.5 9.5 0 0 0 0-9.5.75.75 0 0 1 .275-1.025" />
			<path d="M13.294 7.5a.75.75 0 1 0-1.299.75 7.5 7.5 0 0 1 0 7.5.75.75 0 0 0 1.3.75 9 9 0 0 0 0-9M9.538 8.225a.75.75 0 0 1 1.024.275 7 7 0 0 1 0 7 .75.75 0 0 1-1.299-.75 5.5 5.5 0 0 0 0-5.5.75.75 0 0 1 .275-1.025M7.83 9.5a.75.75 0 1 0-1.299.75 3.5 3.5 0 0 1 0 3.5.75.75 0 1 0 1.3.75 5 5 0 0 0 0-5" />
			<path
				fillRule="evenodd"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNfc.iconName = "nfc";

export default IconNfc;
