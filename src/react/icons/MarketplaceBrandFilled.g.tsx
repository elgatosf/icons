import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MarketplaceBrandFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21 3H5.5C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8H14L4.57124 14.4287C3.58817 15.099 3 16.2119 3 17.4017C3 19.389 4.61101 21 6.59829 21C7.78812 21 8.90103 20.4118 9.5713 19.4288L16 10V18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5V3Z" />
		</svg>
	);
};

MarketplaceBrandFilled.iconName = "marketplace-brand--filled";

export default MarketplaceBrandFilled;