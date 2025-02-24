import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMachineWashColdDelicate = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
			<path
				fillRule="evenodd"
				d="M2.39 2.012a.5.5 0 0 1 .598.377l.499 2.197c.89-.8 2.26-.77 3.117.085a1.27 1.27 0 0 0 1.792 0 2.27 2.27 0 0 1 3.208 0 1.27 1.27 0 0 0 1.792 0 2.27 2.27 0 0 1 3.117-.085l.5-2.197a.5.5 0 0 1 .975.222l-2.235 9.832A2 2 0 0 1 13.803 14H6.197a2 2 0 0 1-1.95-1.557L2.012 2.611a.5.5 0 0 1 .377-.599m2.832 10.21L3.748 5.734l.356-.356a1.27 1.27 0 0 1 1.792 0 2.27 2.27 0 0 0 3.208 0 1.27 1.27 0 0 1 1.792 0 2.27 2.27 0 0 0 3.208 0 1.27 1.27 0 0 1 1.792 0l.356.356-1.474 6.488a1 1 0 0 1-.975.778H6.197a1 1 0 0 1-.975-.778"
				clipRule="evenodd"
			/>
			<path d="M4.5 15.5A.5.5 0 0 1 5 15h10a.5.5 0 1 1 0 1H5a.5.5 0 0 1-.5-.5M5 17a.5.5 0 1 0 0 1h10a.5.5 0 0 0 0-1z" />
		</svg>
	);
};

IconMachineWashColdDelicate.iconName = "machine-wash-cold-delicate";

export default IconMachineWashColdDelicate;
