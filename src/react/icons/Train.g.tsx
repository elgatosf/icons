import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Train = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9.75 5C9.33579 5 9 5.33579 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5H14.25C14.6642 6.5 15 6.16421 15 5.75C15 5.33579 14.6642 5 14.25 5H9.75Z" /><path d="M8 16C8.55228 16 9 15.5523 9 15C9 14.4477 8.55228 14 8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16Z" /><path d="M17 15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15C15 14.4477 15.4477 14 16 14C16.5523 14 17 14.4477 17 15Z" /><path fillRule="evenodd" d="M4 6C4 3.79086 5.79086 2 8 2H16C18.2091 2 20 3.79086 20 6V17C20 18.1046 19.1046 19 18 19H16.9073L18.0244 20.9348C18.2315 21.2935 18.1086 21.7522 17.7499 21.9593C17.3912 22.1664 16.9325 22.0435 16.7254 21.6848L15.1753 19H8.82448L7.2744 21.6848C7.06729 22.0435 6.6086 22.1664 6.24988 21.9593C5.89116 21.7522 5.76826 21.2935 5.97536 20.9348L7.09243 19H6C4.89543 19 4 18.1046 4 17V6ZM8 3.5H16C17.3807 3.5 18.5 4.61929 18.5 6V11H5.5V6C5.5 4.61929 6.61929 3.5 8 3.5ZM5.5 12.5H18.5V17C18.5 17.2761 18.2761 17.5 18 17.5H6C5.72386 17.5 5.5 17.2761 5.5 17V12.5Z" clipRule="evenodd" />
		</svg>
	);
};

Train.iconName = "train";

export default Train;