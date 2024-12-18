import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Briefcase = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M8 5V7H4C2.89543 7 2 7.89543 2 9V12C2 13.0144 2.37764 13.9407 3 14.6458V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V14.6458C21.6224 13.9407 22 13.0144 22 12V9C22 7.89543 21.1046 7 20 7H16V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5ZM14 4.5H10C9.72386 4.5 9.5 4.72386 9.5 5V7H14.5V5C14.5 4.72386 14.2761 4.5 14 4.5ZM20 8.5C20.2761 8.5 20.5 8.72386 20.5 9V12C20.5 13.3807 19.3807 14.5 18 14.5H12.75V13.75C12.75 13.3358 12.4142 13 12 13C11.5858 13 11.25 13.3358 11.25 13.75V14.5H6C4.61929 14.5 3.5 13.3807 3.5 12V9C3.5 8.72386 3.72386 8.5 4 8.5H20ZM11.25 16H6C5.46955 16 4.96322 15.8967 4.5 15.7092V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V15.7092C19.0368 15.8967 18.5305 16 18 16H12.75V16.75C12.75 17.1642 12.4142 17.5 12 17.5C11.5858 17.5 11.25 17.1642 11.25 16.75V16Z" clipRule="evenodd" />
		</svg>
	);
};

Briefcase.iconName = "briefcase";

export default Briefcase;