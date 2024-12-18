import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Underline = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.5 3.75C7.5 3.33579 7.16421 3 6.75 3C6.33579 3 6 3.33579 6 3.75V12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V3.75C18 3.33579 17.6642 3 17.25 3C16.8358 3 16.5 3.33579 16.5 3.75V12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12V3.75Z" /><path d="M3.75 20.5C3.33579 20.5 3 20.8358 3 21.25C3 21.6642 3.33579 22 3.75 22H20.25C20.6642 22 21 21.6642 21 21.25C21 20.8358 20.6642 20.5 20.25 20.5H3.75Z" />
		</svg>
	);
};

Underline.iconName = "underline";

export default Underline;