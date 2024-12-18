import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Money = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM13.5 9C13.5 9.82843 12.8284 10.5 12 10.5C11.1716 10.5 10.5 9.82843 10.5 9C10.5 8.17157 11.1716 7.5 12 7.5C12.8284 7.5 13.5 8.17157 13.5 9Z" clipRule="evenodd" /><path d="M7.75 9C7.75 9.55228 7.30228 10 6.75 10C6.19772 10 5.75 9.55228 5.75 9C5.75 8.44772 6.19772 8 6.75 8C7.30228 8 7.75 8.44772 7.75 9Z" /><path d="M17.25 8C16.6977 8 16.25 8.44772 16.25 9C16.25 9.55228 16.6977 10 17.25 10C17.8023 10 18.25 9.55228 18.25 9C18.25 8.44772 17.8023 8 17.25 8Z" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V13C21 14.1046 20.1046 15 19 15H5C3.89543 15 3 14.1046 3 13V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V13C19.5 13.2761 19.2761 13.5 19 13.5H5C4.72386 13.5 4.5 13.2761 4.5 13V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" /><path d="M7 20.25C7 19.8358 7.33579 19.5 7.75 19.5H16.25C16.6642 19.5 17 19.8358 17 20.25C17 20.6642 16.6642 21 16.25 21H7.75C7.33579 21 7 20.6642 7 20.25Z" /><path d="M5.75 16.5C5.33579 16.5 5 16.8358 5 17.25C5 17.6642 5.33579 18 5.75 18H18.25C18.6642 18 19 17.6642 19 17.25C19 16.8358 18.6642 16.5 18.25 16.5H5.75Z" />
		</svg>
	);
};

Money.iconName = "money";

export default Money;