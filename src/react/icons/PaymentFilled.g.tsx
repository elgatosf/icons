import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPaymentFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5H2z" />
					<path
						fillRule="evenodd"
						d="M2 9h20v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.75 6.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
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
					<path d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H2z" />
					<path
						fillRule="evenodd"
						d="M2 8h16v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.5 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPaymentFilled.iconName = "payment--filled";

export default IconPaymentFilled;
