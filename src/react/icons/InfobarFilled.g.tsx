import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const InfobarFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V9ZM5 11.75C5 11.3358 5.33579 11 5.75 11H8.25C8.66421 11 9 11.3358 9 11.75C9 12.1642 8.66421 12.5 8.25 12.5H5.75C5.33579 12.5 5 12.1642 5 11.75ZM15.75 11C15.3358 11 15 11.3358 15 11.75C15 12.1642 15.3358 12.5 15.75 12.5H18.25C18.6642 12.5 19 12.1642 19 11.75C19 11.3358 18.6642 11 18.25 11H15.75Z" clipRule="evenodd" />
		</svg>
	);
};

InfobarFilled.iconName = "infobar--filled";

export default InfobarFilled;