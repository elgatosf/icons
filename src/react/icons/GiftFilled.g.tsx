import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGiftFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
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
				d="M15 4.00251C15 4.36582 14.903 4.70648 14.7335 5H16C17.1046 5 18 5.89543 18 7C18 7.74029 17.5978 8.38663 17 8.73244C16.7058 8.9026 16.3643 9 16 9L10.5 9V6.5C10.5 6.22386 10.2761 6 10 6C9.72386 6 9.5 6.22386 9.5 6.5V9L4 9C3.65482 9 3.33007 8.91255 3.04668 8.75861C3.03099 8.75009 3.01543 8.74136 3 8.73244C2.4022 8.38663 2 7.74028 2 7C2 5.89543 2.89543 5 4 5H5.26646C5.09698 4.70649 5 4.36586 5 4.00258C5 2.22297 7.15163 1.33174 8.41 2.59011L9.99997 4.18008L11.59 2.59005C12.8484 1.33167 15 2.2229 15 4.00251ZM12.2971 3.29715C12.9255 2.66874 14 3.11381 14 4.00251C14 4.55031 13.5585 4.99497 13.0118 5L10.5943 5L12.2971 3.29715ZM6.98241 5L9.40567 5L7.70289 3.29722C7.07448 2.66881 6 3.11388 6 4.00258C6 4.54845 6.43846 4.99192 6.98241 5Z"
			/>
			<path d="M9.5 10L4 10C3.64936 10 3.31278 9.93985 3 9.82929V15C3 16.1046 3.89543 17 5 17H9.5V10Z" />
			<path d="M10.5 17H15C16.1046 17 17 16.1046 17 15V9.82929C16.6872 9.93985 16.3506 10 16 10L10.5 10V17Z" />
		</svg>
	);
};

IconGiftFilled.iconName = "gift--filled";

export default IconGiftFilled;
