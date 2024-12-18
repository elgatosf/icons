import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const NotificationOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2.21967 21.7803C1.92678 21.4874 1.92678 21.0126 2.21967 20.7197L20.7197 2.21967C21.0126 1.92678 21.4874 1.92678 21.7803 2.21967C22.0732 2.51256 22.0732 2.98744 21.7803 3.28033L17.7569 7.30378C17.9151 7.84165 18 8.41091 18 9V12L19.4142 13.4142C19.7893 13.7893 20 14.298 20 14.8284V16C20 17.1046 19.1046 18 18 18H15.873C15.6958 18.686 15.338 19.3189 14.8284 19.8284C14.0783 20.5786 13.0609 21 12 21C10.9391 21 9.92172 20.5786 9.17157 19.8284C8.66203 19.3189 8.30416 18.686 8.12701 18H7.06066L3.28033 21.7803C2.98744 22.0732 2.51256 22.0732 2.21967 21.7803ZM9.70871 18C9.83253 18.2837 10.0091 18.5447 10.2322 18.7678C10.7011 19.2366 11.337 19.5 12 19.5C12.663 19.5 13.2989 19.2366 13.7678 18.7678C13.9909 18.5447 14.1675 18.2837 14.2913 18H9.70871Z" clipRule="evenodd" /><path d="M4.12457 16.6964L16.1522 4.66876C15.0743 3.63516 13.6113 3 12 3C8.68629 3 6 5.68629 6 9V12L4.58579 13.4142C4.21071 13.7893 4 14.298 4 14.8284V16C4 16.2449 4.04402 16.4795 4.12457 16.6964Z" />
		</svg>
	);
};

NotificationOffFilled.iconName = "notification-off--filled";

export default NotificationOffFilled;