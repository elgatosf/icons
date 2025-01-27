import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFaceSatisfiedAddFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 22q.395 0 .78-.03a6.48 6.48 0 0 1-1.753-5.066 5 5 0 0 1-2.835-1.664.75.75 0 0 1 1.142-.972 3.5 3.5 0 0 0 2 1.168 6.52 6.52 0 0 1 3.705-3.954 1.25 1.25 0 1 1 1.082-.335A6.5 6.5 0 0 1 17.5 11c1.732 0 3.305.677 4.47 1.78q.03-.385.03-.78c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10m-2-11.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFaceSatisfiedAddFilled.iconName = "face-satisfied-add--filled";

export default IconFaceSatisfiedAddFilled;
