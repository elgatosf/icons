import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HotkeyFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H5C3.89543 11 3 10.1046 3 9V5ZM6 6.75C6 6.33579 6.33579 6 6.75 6H11.25C11.6642 6 12 6.33579 12 6.75C12 7.16421 11.6642 7.5 11.25 7.5H6.75C6.33579 7.5 6 7.16421 6 6.75Z" clipRule="evenodd" /><path d="M3.75 16C3.33579 16 3 16.3358 3 16.75C3 17.1642 3.33579 17.5 3.75 17.5H5.75V19.5C5.75 19.9142 6.08579 20.25 6.5 20.25C6.91421 20.25 7.25 19.9142 7.25 19.5V17.5H9.25C9.66421 17.5 10 17.1642 10 16.75C10 16.3358 9.66421 16 9.25 16H7.25V14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14V16H3.75Z" /><path fillRule="evenodd" d="M12 15C12 13.8954 12.8954 13 14 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H14C12.8954 21 12 20.1046 12 19V15ZM15 16.75C15 16.3358 15.3358 16 15.75 16H17.25C17.6642 16 18 16.3358 18 16.75C18 17.1642 17.6642 17.5 17.25 17.5H15.75C15.3358 17.5 15 17.1642 15 16.75Z" clipRule="evenodd" />
		</svg>
	);
};

HotkeyFilled.iconName = "hotkey--filled";

export default HotkeyFilled;