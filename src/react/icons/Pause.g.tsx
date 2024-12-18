import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Pause = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 5C4 3.89543 4.89543 3 6 3H8C9.10457 3 10 3.89543 10 5V19C10 20.1046 9.10457 21 8 21H6C4.89543 21 4 20.1046 4 19V5ZM6 4.5H8C8.27614 4.5 8.5 4.72386 8.5 5V19C8.5 19.2761 8.27614 19.5 8 19.5H6C5.72386 19.5 5.5 19.2761 5.5 19V5C5.5 4.72386 5.72386 4.5 6 4.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M14 5C14 3.89543 14.8954 3 16 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H16C14.8954 21 14 20.1046 14 19V5ZM16 4.5H18C18.2761 4.5 18.5 4.72386 18.5 5V19C18.5 19.2761 18.2761 19.5 18 19.5H16C15.7239 19.5 15.5 19.2761 15.5 19V5C15.5 4.72386 15.7239 4.5 16 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Pause.iconName = "pause";

export default Pause;