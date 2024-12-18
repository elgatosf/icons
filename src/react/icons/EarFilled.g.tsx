import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const EarFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4.97685 11.0153C3.73857 6.47496 7.15653 2 11.8627 2C15.8046 2 19.0001 5.1955 19.0001 9.13735V9.56755C19.0001 11.6455 18.1456 13.6321 16.6371 15.0612L14.8848 16.7213C14.4242 17.1576 14.1013 17.7193 13.956 18.3369L13.9134 18.5178C13.4334 20.5581 11.6128 22 9.51677 22C7.02226 22 5.00006 19.9778 5.00006 17.4833V17C5.00006 16.0597 5.08149 15.2877 5.15178 14.6214C5.17791 14.3737 5.2025 14.1406 5.22079 13.9188C5.28846 13.0987 5.28885 12.3085 5.02319 11.1852L4.97685 11.0153ZM11.9391 5.5C8.677 5.5 7.21771 9.73599 9.96703 11.6394C11.2324 12.5154 10.6125 14.5 9.07344 14.5H8.5C8.08579 14.5 7.75 14.8358 7.75 15.25C7.75 15.6642 8.08579 16 8.5 16H9.07344C12.0831 16 13.2953 12.1192 10.8208 10.4061C9.34771 9.38622 10.0656 7 11.9391 7C13.0736 7 14 7.92087 14 9.04279V9.5C14 9.91421 14.3358 10.25 14.75 10.25C15.1642 10.25 15.5 9.91421 15.5 9.5V9.04279C15.5 7.07988 13.8894 5.5 11.9391 5.5Z" clipRule="evenodd" />
		</svg>
	);
};

EarFilled.iconName = "ear--filled";

export default EarFilled;