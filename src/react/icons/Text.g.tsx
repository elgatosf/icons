import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Text = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75V7.25C20 7.66421 19.6642 8 19.25 8C18.8358 8 18.5 7.66421 18.5 7.25V4.5H12.75L12.75 19.5H15.25C15.6642 19.5 16 19.8358 16 20.25C16 20.6642 15.6642 21 15.25 21L8.75 21C8.33579 21 8 20.6642 8 20.25C8 19.8358 8.33579 19.5 8.75 19.5H11.25L11.25 4.5H5.5V7.25C5.5 7.66421 5.16421 8 4.75 8C4.33579 8 4 7.66421 4 7.25V3.75Z" />
		</svg>
	);
};

Text.iconName = "text";

export default Text;