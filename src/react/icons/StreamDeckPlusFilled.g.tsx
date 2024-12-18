import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const StreamDeckPlusFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8ZM8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18ZM11.3333 7C11.3333 7.55228 10.8855 8 10.3333 8C9.78097 8 9.33325 7.55228 9.33325 7C9.33325 6.44772 9.78097 6 10.3333 6C10.8855 6 11.3333 6.44772 11.3333 7ZM10.3333 11C10.8855 11 11.3333 10.5523 11.3333 10C11.3333 9.44772 10.8855 9 10.3333 9C9.78097 9 9.33325 9.44772 9.33325 10C9.33325 10.5523 9.78097 11 10.3333 11ZM11.3333 17C11.3333 17.5523 10.8855 18 10.3333 18C9.78097 18 9.33325 17.5523 9.33325 17C9.33325 16.4477 9.78097 16 10.3333 16C10.8855 16 11.3333 16.4477 11.3333 17ZM13.6665 8C14.2188 8 14.6665 7.55228 14.6665 7C14.6665 6.44772 14.2188 6 13.6665 6C13.1142 6 12.6665 6.44772 12.6665 7C12.6665 7.55228 13.1142 8 13.6665 8ZM14.6665 10C14.6665 10.5523 14.2188 11 13.6665 11C13.1142 11 12.6665 10.5523 12.6665 10C12.6665 9.44772 13.1142 9 13.6665 9C14.2188 9 14.6665 9.44772 14.6665 10ZM13.6665 18C14.2188 18 14.6665 17.5523 14.6665 17C14.6665 16.4477 14.2188 16 13.6665 16C13.1142 16 12.6665 16.4477 12.6665 17C12.6665 17.5523 13.1142 18 13.6665 18ZM18 7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7ZM17 11C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9C16.4477 9 16 9.44772 16 10C16 10.5523 16.4477 11 17 11ZM18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17ZM6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14L17.25 14C17.6642 14 18 13.6642 18 13.25C18 12.8358 17.6642 12.5 17.25 12.5L6.75 12.5Z" clipRule="evenodd" />
		</svg>
	);
};

StreamDeckPlusFilled.iconName = "stream-deck-plus--filled";

export default StreamDeckPlusFilled;