import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Profile = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9ZM9 8.5H11.25V11.25H8.5V9C8.5 8.72386 8.72386 8.5 9 8.5ZM8.5 12.75V15C8.5 15.2761 8.72386 15.5 9 15.5H11.25V12.75H8.5ZM12.75 12.75V15.5H15C15.2761 15.5 15.5 15.2761 15.5 15V12.75H12.75ZM15.5 11.25V9C15.5 8.72386 15.2761 8.5 15 8.5H12.75V11.25H15.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Profile.iconName = "profile";

export default Profile;