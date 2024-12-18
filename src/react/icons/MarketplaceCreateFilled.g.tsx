import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MarketplaceCreateFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M9.12734 11.2978L5.29962 9.86236C3.91638 9.34364 3 8.0213 3 6.544C3 4.5867 4.5867 3 6.544 3C8.0213 3 9.34364 3.91638 9.86236 5.29962L11.2978 9.12734C11.5411 9.77622 12.4589 9.77622 12.7022 9.12734L14.1376 5.29962C14.6564 3.91638 15.9787 3 17.456 3C19.4133 3 21 4.5867 21 6.544C21 8.0213 20.0836 9.34364 18.7004 9.86236L14.8727 11.2978C14.2238 11.5411 14.2238 12.4589 14.8727 12.7022L18.7004 14.1376C20.0836 14.6564 21 15.9787 21 17.456C21 19.4133 19.4133 21 17.456 21C15.9787 21 14.6564 20.0836 14.1376 18.7004L12.7022 14.8727C12.4589 14.2238 11.5411 14.2238 11.2978 14.8727L9.86236 18.7004C9.34364 20.0836 8.0213 21 6.544 21C4.5867 21 3 19.4133 3 17.456C3 15.9787 3.91638 14.6564 5.29962 14.1376L9.12734 12.7022C9.77622 12.4589 9.77622 11.5411 9.12734 11.2978Z" />
		</svg>
	);
};

MarketplaceCreateFilled.iconName = "marketplace-create--filled";

export default MarketplaceCreateFilled;