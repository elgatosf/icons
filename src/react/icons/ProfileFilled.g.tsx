import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ProfileFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9 8.5H11.25V11.25H8.5V9C8.5 8.72386 8.72386 8.5 9 8.5Z" /><path d="M8.5 12.75V15C8.5 15.2761 8.72386 15.5 9 15.5H11.25V12.75H8.5Z" /><path d="M12.75 12.75V15.5H15C15.2761 15.5 15.5 15.2761 15.5 15V12.75H12.75Z" /><path d="M15.5 11.25V9C15.5 8.72386 15.2761 8.5 15 8.5H12.75V11.25H15.5Z" /><path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9Z" clipRule="evenodd" />
		</svg>
	);
};

ProfileFilled.iconName = "profile--filled";

export default ProfileFilled;