import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const StreamDeckNeoFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12ZM7 8C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10C7.55228 10 8 9.55228 8 9C8 8.44772 7.55228 8 7 8ZM17 8C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10C17.5523 10 18 9.55228 18 9C18 8.44772 17.5523 8 17 8ZM13.6665 8C13.1142 8 12.6665 8.44772 12.6665 9C12.6665 9.55228 13.1142 10 13.6665 10C14.2188 10 14.6665 9.55228 14.6665 9C14.6665 8.44772 14.2188 8 13.6665 8ZM10.3333 8C9.78097 8 9.33325 8.44772 9.33325 9C9.33325 9.55228 9.78097 10 10.3333 10C10.8855 10 11.3333 9.55228 11.3333 9C11.3333 8.44772 10.8855 8 10.3333 8ZM9.75 14.5054C9.33579 14.5054 9 14.8412 9 15.2554C9 15.6696 9.33579 16.0054 9.75 16.0054H14.25C14.6642 16.0054 15 15.6696 15 15.2554C15 14.8412 14.6642 14.5054 14.25 14.5054H9.75ZM6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12ZM16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12ZM12.6665 12C12.6665 11.4477 13.1142 11 13.6665 11C14.2188 11 14.6665 11.4477 14.6665 12C14.6665 12.5523 14.2188 13 13.6665 13C13.1142 13 12.6665 12.5523 12.6665 12ZM9.33325 12C9.33325 11.4477 9.78097 11 10.3333 11C10.8855 11 11.3333 11.4477 11.3333 12C11.3333 12.5523 10.8855 13 10.3333 13C9.78097 13 9.33325 12.5523 9.33325 12ZM6.75 14.5054C6.33579 14.5054 6 14.8412 6 15.2554C6 15.6696 6.33579 16.0054 6.75 16.0054H7.25C7.66421 16.0054 8 15.6696 8 15.2554C8 14.8412 7.66421 14.5054 7.25 14.5054H6.75ZM16.75 14.5054C16.3358 14.5054 16 14.8412 16 15.2554C16 15.6696 16.3358 16.0054 16.75 16.0054H17.25C17.6642 16.0054 18 15.6696 18 15.2554C18 14.8412 17.6642 14.5054 17.25 14.5054H16.75Z" clipRule="evenodd" />
		</svg>
	);
};

StreamDeckNeoFilled.iconName = "stream-deck-neo--filled";

export default StreamDeckNeoFilled;