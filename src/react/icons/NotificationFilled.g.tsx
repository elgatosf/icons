import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const NotificationFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 3C8.68629 3 6 5.68629 6 9V12L4.58579 13.4142C4.21071 13.7893 4 14.298 4 14.8284V16C4 17.1046 4.89543 18 6 18H8.12701C8.30416 18.686 8.66203 19.3189 9.17157 19.8284C9.92172 20.5786 10.9391 21 12 21C13.0609 21 14.0783 20.5786 14.8284 19.8284C15.338 19.3189 15.6958 18.686 15.873 18H18C19.1046 18 20 17.1046 20 16V14.8284C20 14.298 19.7893 13.7893 19.4142 13.4142L18 12V9C18 5.68629 15.3137 3 12 3ZM14.2913 18H9.70871C9.83253 18.2837 10.0091 18.5447 10.2322 18.7678C10.7011 19.2366 11.337 19.5 12 19.5C12.663 19.5 13.2989 19.2366 13.7678 18.7678C13.9909 18.5447 14.1675 18.2837 14.2913 18Z" clipRule="evenodd" />
		</svg>
	);
};

NotificationFilled.iconName = "notification--filled";

export default NotificationFilled;