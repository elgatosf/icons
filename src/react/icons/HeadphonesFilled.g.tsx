import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HeadphonesFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V17.25C3.5 17.6642 3.16421 18 2.75 18C2.33579 18 2 17.6642 2 17.25V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V17.25C22 17.6642 21.6642 18 21.25 18C20.8358 18 20.5 17.6642 20.5 17.25V12C20.5 7.30558 16.6944 3.5 12 3.5Z" /><path d="M5 15C5 13.8954 5.89543 13 7 13H8C9.10457 13 10 13.8954 10 15V20C10 21.1046 9.10457 22 8 22H7C5.89543 22 5 21.1046 5 20V15Z" /><path d="M16 13C14.8954 13 14 13.8954 14 15V20C14 21.1046 14.8954 22 16 22H17C18.1046 22 19 21.1046 19 20V15C19 13.8954 18.1046 13 17 13H16Z" />
		</svg>
	);
};

HeadphonesFilled.iconName = "headphones--filled";

export default HeadphonesFilled;