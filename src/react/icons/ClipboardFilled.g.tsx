import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ClipboardFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7.01373 4C7.13809 2.87501 8.09186 2 9.25 2H14.75C15.9081 2 16.8619 2.87501 16.9863 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H7.01373ZM9.25 3.5H14.75C15.1642 3.5 15.5 3.83579 15.5 4.25V5.25C15.5 5.66421 15.1642 6 14.75 6H9.25C8.83579 6 8.5 5.66421 8.5 5.25V4.25C8.5 3.83579 8.83579 3.5 9.25 3.5Z" clipRule="evenodd" />
		</svg>
	);
};

ClipboardFilled.iconName = "clipboard--filled";

export default ClipboardFilled;