import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ActionWheel = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M8.25 7.5H15.75C16.1642 7.5 16.5 7.83579 16.5 8.25V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H8.25C7.83579 16.5 7.5 16.1642 7.5 15.75V8.25C7.5 7.83579 7.83579 7.5 8.25 7.5ZM6 8.25C6 7.00736 7.00736 6 8.25 6H15.75C16.9926 6 18 7.00736 18 8.25V15.75C18 16.9926 16.9926 18 15.75 18H8.25C7.00736 18 6 16.9926 6 15.75V8.25ZM9.75 13.5C9.33579 13.5 9 13.8358 9 14.25C9 14.6642 9.33579 15 9.75 15H14.25C14.6642 15 15 14.6642 15 14.25C15 13.8358 14.6642 13.5 14.25 13.5H9.75ZM22.5 14.25C22.5 14.6642 22.1642 15 21.75 15H21H20.25C19.8358 15 19.5 15.3358 19.5 15.75C19.5 16.1642 19.8358 16.5 20.25 16.5H21H21.75C22.9926 16.5 24 15.4926 24 14.25V9.75C24 8.50736 22.9926 7.5 21.75 7.5H21L20.25 7.5C19.8358 7.5 19.5 7.83579 19.5 8.25C19.5 8.66421 19.8358 9 20.25 9H21H21.75C22.1642 9 22.5 9.33579 22.5 9.75V14.25ZM2.24996 9C1.83576 9.00002 1.5 9.3358 1.5 9.75L1.5 14.25C1.5 14.6642 1.83579 15 2.25 15H3H3.75C4.16421 15 4.5 15.3358 4.5 15.75C4.5 16.1642 4.16421 16.5 3.75 16.5H3H2.25C1.00736 16.5 0 15.4926 0 14.25V9.75C0 8.50736 1.00736 7.5 2.25 7.5H3H3.75C4.16421 7.5 4.5 7.83579 4.5 8.25C4.5 8.66421 4.16421 9 3.75 9L3 9H2.25H2.24996Z" clipRule="evenodd" />
		</svg>
	);
};

ActionWheel.iconName = "action-wheel";

export default ActionWheel;