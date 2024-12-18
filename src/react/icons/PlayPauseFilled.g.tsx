import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PlayPauseFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.8564 10.2678C14.1897 11.0376 14.1897 12.9621 12.8564 13.7319L5 18.2678C3.66667 19.0376 2 18.0753 2 16.5357V7.46392C2 5.92432 3.66667 4.96207 5 5.73187L12.8564 10.2678Z" /><path d="M17.25 5.49982C17.6642 5.49982 18 5.83561 18 6.24982L18 17.7498C18 18.164 17.6642 18.4998 17.25 18.4998C16.8357 18.4998 16.5 18.164 16.5 17.7498L16.5 6.24982C16.5 5.83561 16.8357 5.49982 17.25 5.49982Z" /><path d="M22 6.24982C22 5.83561 21.6642 5.49982 21.25 5.49982C20.8357 5.49982 20.5 5.83561 20.5 6.24982V17.7498C20.5 18.164 20.8357 18.4998 21.25 18.4998C21.6642 18.4998 22 18.164 22 17.7498V6.24982Z" />
		</svg>
	);
};

PlayPauseFilled.iconName = "play-pause--filled";

export default PlayPauseFilled;