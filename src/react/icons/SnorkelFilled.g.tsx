import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SnorkelFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M17 4C17 2.89543 17.8954 2 19 2C20.1046 2 21 2.89543 21 4V16C21 19.3137 18.3137 22 15 22H11C9.89543 22 9 21.1046 9 20C9 18.8954 9.89543 18 11 18H15C16.1046 18 17 17.1046 17 16V15H16.7487C16.0349 15 15.3615 14.7853 14.7984 14.4104C14.6101 15.3117 13.8108 16 12.8402 16H11.1598C10.1892 16 9.38986 15.3117 9.20163 14.4104C8.63853 14.7853 7.96514 15 7.25126 15H6.93087C4.75991 15 3 13.2401 3 11.0691V9C3 6.79086 4.79086 5 7 5H17V4ZM17 6.5H7C5.61929 6.5 4.5 7.61929 4.5 9V11.0691C4.5 12.4117 5.58834 13.5 6.93087 13.5H7.25126C8.17841 13.5 8.98659 12.869 9.21145 11.9695L9.30225 11.6063C9.61173 10.3684 10.724 9.5 12 9.5C13.276 9.5 14.3883 10.3684 14.6977 11.6063L14.7885 11.9695C15.0134 12.869 15.8216 13.5 16.7487 13.5H17.0691C18.4117 13.5 19.5 12.4117 19.5 11.0691V9C19.5 7.61929 18.3807 6.5 17 6.5Z" clipRule="evenodd" />
		</svg>
	);
};

SnorkelFilled.iconName = "snorkel--filled";

export default SnorkelFilled;