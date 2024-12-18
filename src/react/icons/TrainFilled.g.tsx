import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TrainFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9.75 5C9.33579 5 9 5.33579 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5H14.25C14.6642 6.5 15 6.16421 15 5.75C15 5.33579 14.6642 5 14.25 5H9.75Z" /><path fillRule="evenodd" d="M8 2C5.79086 2 4 3.79086 4 6V17C4 18.1046 4.89543 19 6 19H7.09243L5.97536 20.9348C5.76826 21.2935 5.89116 21.7522 6.24988 21.9593C6.6086 22.1664 7.06729 22.0435 7.2744 21.6848L8.82448 19H15.1753L16.7254 21.6848C16.9325 22.0435 17.3912 22.1664 17.7499 21.9593C18.1086 21.7522 18.2315 21.2935 18.0244 20.9348L16.9073 19H18C19.1046 19 20 18.1046 20 17V6C20 3.79086 18.2091 2 16 2H8ZM8 16C8.55228 16 9 15.5523 9 15C9 14.4477 8.55228 14 8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16ZM17 15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15C15 14.4477 15.4477 14 16 14C16.5523 14 17 14.4477 17 15ZM8 3.5C6.61929 3.5 5.5 4.61929 5.5 6V11H18.5V6C18.5 4.61929 17.3807 3.5 16 3.5H8Z" clipRule="evenodd" />
		</svg>
	);
};

TrainFilled.iconName = "train--filled";

export default TrainFilled;