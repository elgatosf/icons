import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Filter = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21 5.75C21 6.16422 20.6642 6.5 20.25 6.5L3.75 6.5C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H20.25C20.6642 5 21 5.33579 21 5.75Z" /><path d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25L17.25 11.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75L6.75 12.75C6.33579 12.75 6 12.4142 6 12Z" /><path d="M14.25 19C14.6642 19 15 18.6642 15 18.25C15 17.8358 14.6642 17.5 14.25 17.5H9.75C9.33579 17.5 9 17.8358 9 18.25C9 18.6642 9.33579 19 9.75 19H14.25Z" />
		</svg>
	);
};

Filter.iconName = "filter";

export default Filter;