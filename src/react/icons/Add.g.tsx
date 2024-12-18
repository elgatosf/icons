import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Add = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.75 4.75C12.75 4.33579 12.4142 4 12 4C11.5858 4 11.25 4.33579 11.25 4.75V11.25H4.75C4.33579 11.25 4 11.5858 4 12C4 12.4142 4.33579 12.75 4.75 12.75H11.25V19.25C11.25 19.6642 11.5858 20 12 20C12.4142 20 12.75 19.6642 12.75 19.25V12.75H19.25C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25H12.75V4.75Z" />
		</svg>
	);
};

Add.iconName = "add";

export default Add;