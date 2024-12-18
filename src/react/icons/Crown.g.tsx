import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Crown = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12.6168 3.3231C12.4767 3.12075 12.2462 3 12.0001 3C11.754 3 11.5236 3.12074 11.3835 3.32309L7.2615 9.27693L3.09933 7.08631C2.84807 6.95407 2.54367 6.97506 2.31293 7.14053C2.08219 7.30601 1.96469 7.5876 2.00936 7.868L3.65809 18.2165C3.8321 19.3087 4.77409 20.1125 5.88007 20.1125H18.1202C19.2262 20.1125 20.1682 19.3087 20.3422 18.2165L21.9908 7.868C22.0355 7.58759 21.918 7.30601 21.6872 7.14053C21.4565 6.97506 21.1521 6.95407 20.9008 7.08631L16.7386 9.27693L12.6168 3.3231ZM8.11666 10.6769L12.0001 5.06762L15.8834 10.6769C16.0992 10.9887 16.5138 11.0903 16.8493 10.9137L20.2738 9.11138L19.3357 15H4.66455L3.72638 9.11141L7.15071 10.9137C7.48625 11.0903 7.90082 10.9887 8.11666 10.6769ZM4.90353 16.5L5.13941 17.9805C5.19741 18.3446 5.51141 18.6125 5.88007 18.6125H18.1202C18.4888 18.6125 18.8028 18.3446 18.8608 17.9805L19.0967 16.5H4.90353Z" clipRule="evenodd" />
		</svg>
	);
};

Crown.iconName = "crown";

export default Crown;