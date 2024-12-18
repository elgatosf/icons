import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CrownFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.0001 3C12.2462 3 12.4767 3.12075 12.6168 3.3231L16.7386 9.27693L20.9008 7.08631C21.1521 6.95407 21.4565 6.97506 21.6872 7.14053C21.918 7.30601 22.0355 7.58759 21.9908 7.868L20.8546 15H3.14563L2.00936 7.868C1.96469 7.5876 2.08219 7.30601 2.31293 7.14053C2.54367 6.97506 2.84807 6.95407 3.09933 7.08631L7.2615 9.27693L11.3835 3.32309C11.5236 3.12074 11.754 3 12.0001 3Z" /><path d="M3.38461 16.5L3.65809 18.2165C3.8321 19.3087 4.77409 20.1125 5.88007 20.1125H18.1202C19.2262 20.1125 20.1682 19.3087 20.3422 18.2165L20.6156 16.5H3.38461Z" />
		</svg>
	);
};

CrownFilled.iconName = "crown--filled";

export default CrownFilled;