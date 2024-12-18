import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Notification = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V12L19.4142 13.4142C19.7893 13.7893 20 14.298 20 14.8284V16C20 17.1046 19.1046 18 18 18H15.873C15.6958 18.686 15.338 19.3189 14.8284 19.8284C14.0783 20.5786 13.0609 21 12 21C10.9391 21 9.92172 20.5786 9.17157 19.8284C8.66203 19.3189 8.30416 18.686 8.12701 18H6C4.89543 18 4 17.1046 4 16V14.8284C4 14.298 4.21071 13.7893 4.58579 13.4142L6 12V9ZM7.06066 13.0607C7.34196 12.7794 7.5 12.3978 7.5 12V9C7.5 6.51472 9.51472 4.5 12 4.5C14.4853 4.5 16.5 6.51472 16.5 9V12C16.5 12.3978 16.658 12.7794 16.9393 13.0607L18.3536 14.4749C18.4473 14.5686 18.5 14.6958 18.5 14.8284V16C18.5 16.2761 18.2761 16.5 18 16.5H6C5.72386 16.5 5.5 16.2761 5.5 16V14.8284C5.5 14.6958 5.55268 14.5686 5.64645 14.4749L7.06066 13.0607ZM9.70871 18C9.83253 18.2837 10.0091 18.5447 10.2322 18.7678C10.7011 19.2366 11.337 19.5 12 19.5C12.663 19.5 13.2989 19.2366 13.7678 18.7678C13.9909 18.5447 14.1675 18.2837 14.2913 18H9.70871Z" clipRule="evenodd" />
		</svg>
	);
};

Notification.iconName = "notification";

export default Notification;