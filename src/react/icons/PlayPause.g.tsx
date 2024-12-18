import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PlayPause = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12.8564 13.7319C14.1897 12.9621 14.1897 11.0376 12.8564 10.2678L5 5.73187C3.66667 4.96207 2 5.92432 2 7.46392V16.5357C2 18.0753 3.66667 19.0376 5 18.2678L12.8564 13.7319ZM4.25 16.9687L12.1064 12.4328C12.4397 12.2404 12.4397 11.7593 12.1064 11.5668L4.25 7.03091C3.91667 6.83846 3.5 7.07902 3.5 7.46392L3.5 16.5357C3.5 16.9206 3.91667 17.1612 4.25 16.9687Z" clipRule="evenodd" /><path d="M17.25 5.49982C17.6642 5.49982 18 5.83561 18 6.24982L18 17.7498C18 18.164 17.6642 18.4998 17.25 18.4998C16.8357 18.4998 16.5 18.164 16.5 17.7498L16.5 6.24982C16.5 5.83561 16.8357 5.49982 17.25 5.49982Z" /><path d="M22 6.24982C22 5.83561 21.6642 5.49982 21.25 5.49982C20.8357 5.49982 20.5 5.83561 20.5 6.24982V17.7498C20.5 18.164 20.8357 18.4998 21.25 18.4998C21.6642 18.4998 22 18.164 22 17.7498V6.24982Z" />
		</svg>
	);
};

PlayPause.iconName = "play-pause";

export default PlayPause;