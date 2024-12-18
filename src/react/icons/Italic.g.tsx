import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Italic = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.5145 3.00003H18.25C18.6642 3.00003 19 3.33581 19 3.75003C19 4.16424 18.6642 4.50003 18.25 4.50003H15.0564L10.511 19.5H13.25C13.6642 19.5 14 19.8358 14 20.25C14 20.6642 13.6642 21 13.25 21H9.51953C9.50673 21.0004 9.49389 21.0004 9.48102 21H5.75C5.33579 21 5 20.6642 5 20.25C5 19.8358 5.33579 19.5 5.75 19.5H8.94361L13.4891 4.50003H10.75C10.3358 4.50003 10 4.16424 10 3.75003C10 3.33581 10.3358 3.00003 10.75 3.00003H14.4849C14.4948 2.99983 14.5046 2.99983 14.5145 3.00003Z" />
		</svg>
	);
};

Italic.iconName = "italic";

export default Italic;