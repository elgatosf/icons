import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Group = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5ZM9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M20 7.5C20 9.433 18.433 11 16.5 11C14.567 11 13 9.433 13 7.5C13 5.567 14.567 4 16.5 4C18.433 4 20 5.567 20 7.5ZM18.5 7.5C18.5 8.60457 17.6046 9.5 16.5 9.5C15.3954 9.5 14.5 8.60457 14.5 7.5C14.5 6.39543 15.3954 5.5 16.5 5.5C17.6046 5.5 18.5 6.39543 18.5 7.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M7.5 12.5C4.46243 12.5 2 14.9624 2 18C2 19.1046 2.89543 20 4 20H11C12.1046 20 13 19.1046 13 18C13 14.9624 10.5376 12.5 7.5 12.5ZM3.5 18C3.5 18.2761 3.72386 18.5 4 18.5H11C11.2761 18.5 11.5 18.2761 11.5 18C11.5 15.7909 9.70914 14 7.5 14C5.29086 14 3.5 15.7909 3.5 18Z" clipRule="evenodd" /><path d="M14.4659 14.5549C15.0613 14.2025 15.7559 14 16.5 14C18.7092 14 20.5 15.7909 20.5 18C20.5 18.2761 20.2762 18.5 20 18.5H15.0632C14.649 18.5 14.3132 18.8358 14.3132 19.25C14.3132 19.6642 14.649 20 15.0632 20H20C21.1046 20 22 19.1046 22 18C22 14.9624 19.5376 12.5 16.5 12.5C15.4797 12.5 14.5222 12.7785 13.7018 13.2641C13.3454 13.4751 13.2275 13.9352 13.4385 14.2916C13.6495 14.648 14.1095 14.7659 14.4659 14.5549Z" />
		</svg>
	);
};

Group.iconName = "group";

export default Group;