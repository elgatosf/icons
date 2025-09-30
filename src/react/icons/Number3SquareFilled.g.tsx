import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber3SquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM14.9265 13.8111C14.9265 15.5821 13.2655 16.1431 11.8575 16.1431C10.2955 16.1431 8.96449 15.5821 8.85449 13.7781H10.5045C10.5265 14.5921 11.1205 14.9991 11.8465 14.9991C12.6165 14.9991 13.2765 14.5591 13.2765 13.6791C13.2765 12.6781 12.3635 12.4251 11.5825 12.4251C11.4635 12.4251 11.3395 12.4352 11.2172 12.4451C11.1586 12.4498 11.1005 12.4546 11.0435 12.4581V11.3471C11.1865 11.3581 11.3295 11.3691 11.4725 11.3691C12.2535 11.3691 13.1445 11.1381 13.1445 10.1371C13.1445 9.38912 12.5395 8.98212 11.8905 8.98212C11.3845 8.98212 10.6915 9.25712 10.6915 10.0931H8.99749C8.99749 8.49812 10.6475 7.84912 11.9235 7.84912C13.1995 7.84912 14.7615 8.39912 14.7615 9.99412C14.7615 11.0061 14.0575 11.6881 13.0675 11.8421C14.1455 12.0071 14.9265 12.6121 14.9265 13.8111Z"
			/>
		</svg>
	);
};

IconNumber3SquareFilled.iconName = "number3-square--filled";

export default IconNumber3SquareFilled;
