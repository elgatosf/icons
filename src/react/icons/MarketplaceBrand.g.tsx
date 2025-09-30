import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMarketplaceBrand = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16 18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5V3H5.5C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8H13L4.46667 14.4C3.54338 15.0925 3 16.1792 3 17.3333C3 19.3584 4.64162 21 6.66667 21C7.82078 21 8.90753 20.4566 9.6 19.5333L16 11V18.5ZM19.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5C4.5 6.05228 4.94772 6.5 5.5 6.5H13C13.6456 6.5 14.2189 6.91315 14.423 7.52566C14.6272 8.13817 14.4165 8.81261 13.9 9.2L5.36667 15.6C4.82109 16.0092 4.5 16.6514 4.5 17.3333C4.5 18.53 5.47005 19.5 6.66667 19.5C7.34864 19.5 7.99082 19.1789 8.4 18.6333L14.8 10.1C15.1874 9.58348 15.8618 9.3728 16.4743 9.57697C17.0869 9.78115 17.5 10.3544 17.5 11V18.5C17.5 19.0523 17.9477 19.5 18.5 19.5C19.0523 19.5 19.5 19.0523 19.5 18.5V4.5Z"
			/>
		</svg>
	);
};

IconMarketplaceBrand.iconName = "marketplace-brand";

export default IconMarketplaceBrand;
