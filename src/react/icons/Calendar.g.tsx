import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Calendar = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM15.5 5.5V6.5C15.5 6.91421 15.8358 7.25 16.25 7.25C16.6642 7.25 17 6.91421 17 6.5V5.5H19C19.2761 5.5 19.5 5.72386 19.5 6V8.5L4.5 8.5V6C4.5 5.72386 4.72386 5.5 5 5.5H7V6.5C7 6.91421 7.33579 7.25 7.75 7.25C8.16421 7.25 8.5 6.91421 8.5 6.5V5.5H15.5ZM4.5 10V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V10L4.5 10Z" clipRule="evenodd" />
		</svg>
	);
};

Calendar.iconName = "calendar";

export default Calendar;