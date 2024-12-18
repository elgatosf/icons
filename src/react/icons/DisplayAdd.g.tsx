import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DisplayAdd = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V12.8096C21.5557 12.3832 21.051 12.0194 20.5 11.7322V6C20.5 5.72386 20.2761 5.5 20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V15C3.5 15.2761 3.72386 15.5 4 15.5H11.3135C11.159 15.9782 11.0585 16.4805 11.0189 17H4C2.89543 17 2 16.1046 2 15V6Z" /><path d="M11.4982 20C11.3004 19.5258 11.1572 19.0232 11.0764 18.5H9.75C9.33579 18.5 9 18.8358 9 19.25C9 19.6642 9.33579 20 9.75 20H11.4982Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

DisplayAdd.iconName = "display-add";

export default DisplayAdd;