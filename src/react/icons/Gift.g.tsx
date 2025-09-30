import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGift = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M14.7335 5C14.903 4.70648 15 4.36582 15 4.00251C15 2.2229 12.8484 1.33167 11.59 2.59005L9.99997 4.18008L8.41 2.59011C7.15163 1.33174 5 2.22297 5 4.00258C5 4.36586 5.09698 4.70649 5.26646 5H4C2.89543 5 2 5.89543 2 7C2 7.74028 2.4022 8.38663 3 8.73244V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V8.73244C17.5978 8.38663 18 7.74028 18 7C18 5.89543 17.1046 5 16 5H14.7335ZM14 4.00251C14 3.11381 12.9255 2.66874 12.2971 3.29715L10.5943 5H13.0118C13.5584 4.99499 14 4.55032 14 4.00251ZM10.5 6.00011L13.0025 6.00004C13.0069 6.00004 13.0113 6.00003 13.0157 6L16 6C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8L10.5 8V6.00011ZM6.97613 6C6.98325 6.00008 6.99039 6.00011 6.99753 6.00011H9.5V8L4 8C3.44771 8 3 7.55228 3 7C3 6.44772 3.44771 6 4 6L6.97613 6ZM9.40567 5H6.98242C6.43846 4.99192 6 4.54846 6 4.00258C6 3.11388 7.07448 2.66881 7.70289 3.29722L9.40567 5ZM9.5 16L9.5 9H4L4 15C4 15.5523 4.44772 16 5 16H9.5ZM10.5 9L10.5 16H15C15.5523 16 16 15.5523 16 15V9H10.5Z"
			/>
		</svg>
	);
};

IconGift.iconName = "gift";

export default IconGift;
