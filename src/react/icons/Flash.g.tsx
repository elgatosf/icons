import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Flash = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M15.6262 2.10119C15.9314 2.27811 16.072 2.64372 15.964 2.9795L14.0289 9H19.25C19.5472 9 19.8163 9.17544 19.9362 9.44732C20.0562 9.71921 20.0042 10.0363 19.8039 10.2557L9.30388 21.7557C9.06606 22.0162 8.6789 22.0757 8.37379 21.8988C8.06868 21.7219 7.92806 21.3563 8.03599 21.0205L9.97115 15H4.75001C4.45286 15 4.18372 14.8246 4.0638 14.5527C3.94388 14.2808 3.99579 13.9637 4.19615 13.7443L14.6962 2.24429C14.934 1.98383 15.3211 1.92426 15.6262 2.10119ZM6.45039 13.5H11C11.2397 13.5 11.4649 13.6145 11.6061 13.8082C11.7473 14.0019 11.7874 14.2513 11.714 14.4795L10.5176 18.2018L17.5496 10.5H13C12.7604 10.5 12.5351 10.3855 12.3939 10.1918C12.2528 9.99813 12.2127 9.74865 12.286 9.52049L13.4824 5.79824L6.45039 13.5Z" clipRule="evenodd" />
		</svg>
	);
};

Flash.iconName = "flash";

export default Flash;