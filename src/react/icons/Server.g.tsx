import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Server = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10 8.25C10 7.83579 10.3358 7.5 10.75 7.5H17.25C17.6642 7.5 18 7.83579 18 8.25C18 8.66421 17.6642 9 17.25 9H10.75C10.3358 9 10 8.66421 10 8.25Z" /><path d="M6.75 7.5C6.33579 7.5 6 7.83579 6 8.25C6 8.66421 6.33579 9 6.75 9H7.25C7.66421 9 8 8.66421 8 8.25C8 7.83579 7.66421 7.5 7.25 7.5H6.75Z" /><path d="M6 15.75C6 15.3358 6.33579 15 6.75 15H7.25C7.66421 15 8 15.3358 8 15.75C8 16.1642 7.66421 16.5 7.25 16.5H6.75C6.33579 16.5 6 16.1642 6 15.75Z" /><path d="M10.75 15C10.3358 15 10 15.3358 10 15.75C10 16.1642 10.3358 16.5 10.75 16.5H17.25C17.6642 16.5 18 16.1642 18 15.75C18 15.3358 17.6642 15 17.25 15H10.75Z" /><path fillRule="evenodd" d="M2.43866 12C2.16418 11.6576 2 11.223 2 10.75V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V10.75C22 11.223 21.8358 11.6576 21.5613 12C21.8358 12.3424 22 12.777 22 13.25V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V13.25C2 12.777 2.16418 12.3424 2.43866 12ZM4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V10.75C20.5 11.0261 20.2761 11.25 20 11.25H4C3.72386 11.25 3.5 11.0261 3.5 10.75V6C3.5 5.72386 3.72386 5.5 4 5.5ZM4 12.75C3.72386 12.75 3.5 12.9739 3.5 13.25V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V13.25C20.5 12.9739 20.2761 12.75 20 12.75H4Z" clipRule="evenodd" />
		</svg>
	);
};

Server.iconName = "server";

export default Server;