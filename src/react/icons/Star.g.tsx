import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Star = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M8.68416 7.46308L3.27477 8.24911C2.45455 8.36829 2.12704 9.37627 2.72056 9.9548L6.63483 13.7703L5.7108 19.1578C5.57069 19.9747 6.42812 20.5977 7.16175 20.212L12.0001 17.6683L16.8384 20.212C17.572 20.5977 18.4294 19.9747 18.2893 19.1578L17.3653 13.7703L21.2795 9.9548C21.8731 9.37627 21.5455 8.36829 20.7253 8.24911L15.3159 7.46308L12.8968 2.56134C12.53 1.81809 11.4701 1.8181 11.1033 2.56134L8.68416 7.46308ZM14.3198 8.83409L12.0001 4.13368L9.68026 8.83409L4.49305 9.58784L8.24655 13.2466L7.36047 18.4128L12.0001 15.9737L16.6396 18.4128L15.7535 13.2466L19.507 9.58784L14.3198 8.83409Z" clipRule="evenodd" />
		</svg>
	);
};

Star.iconName = "star";

export default Star;