import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Elements = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V12C20.5 12.2761 20.2761 12.5 20 12.5H10C9.72386 12.5 9.5 12.2761 9.5 12V6C9.5 5.72386 9.72386 5.5 10 5.5ZM20 4C21.1046 4 22 4.89543 22 6V12C22 13.1046 21.1046 14 20 14H10C8.89543 14 8 13.1046 8 12V6C8 4.89543 8.89543 4 10 4H20Z" clipRule="evenodd" /><path fillRule="evenodd" d="M5.75 7C5.33579 7 5 7.33579 5 7.75V15C5 16.1046 5.89543 17 7 17H18.25C18.6642 17 19 16.6642 19 16.25C19 15.8358 18.6642 15.5 18.25 15.5H7C6.72386 15.5 6.5 15.2761 6.5 15V7.75C6.5 7.33579 6.16421 7 5.75 7Z" clipRule="evenodd" /><path fillRule="evenodd" d="M2.75 10C2.33579 10 2 10.3358 2 10.75V18C2 19.1046 2.89543 20 4 20H15.25C15.6642 20 16 19.6642 16 19.25C16 18.8358 15.6642 18.5 15.25 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V10.75C3.5 10.3358 3.16421 10 2.75 10Z" clipRule="evenodd" />
		</svg>
	);
};

Elements.iconName = "elements";

export default Elements;