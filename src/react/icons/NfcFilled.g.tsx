import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNfcFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.974-5.5a.75.75 0 0 0-1.299.75 9.5 9.5 0 0 1 0 9.5.75.75 0 1 0 1.3.75 11 11 0 0 0 0-11m-3.756.725a.75.75 0 0 1 1.024.275 9 9 0 0 1 0 9 .75.75 0 0 1-1.299-.75 7.5 7.5 0 0 0 0-7.5.75.75 0 0 1 .275-1.025m-2.732 1a.75.75 0 0 1 1.024.275 7 7 0 0 1 0 7 .75.75 0 0 1-1.299-.75 5.5 5.5 0 0 0 0-5.5.75.75 0 0 1 .275-1.025m-2.732 1A.75.75 0 0 1 7.83 9.5a5 5 0 0 1 0 5 .75.75 0 0 1-1.299-.75 3.5 3.5 0 0 0 0-3.5.75.75 0 0 1 .275-1.025"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNfcFilled.iconName = "nfc--filled";

export default IconNfcFilled;
