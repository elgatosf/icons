import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DisplayAddFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4 4C2.89543 4 2 4.89543 2 6V15C2 16.1046 2.89543 17 4 17H11.0189C11.2743 13.6438 14.0784 11 17.5 11C19.2465 11 20.8321 11.6888 22 12.8096V6C22 4.89543 21.1046 4 20 4H4Z" /><path d="M9.75 18.5H11.0764C11.1572 19.0232 11.3004 19.5258 11.4982 20H9.75C9.33579 20 9 19.6642 9 19.25C9 18.8358 9.33579 18.5 9.75 18.5Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

DisplayAddFilled.iconName = "display-add--filled";

export default DisplayAddFilled;