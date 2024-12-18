import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const List = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4 6.75C4.55228 6.75 5 6.30228 5 5.75C5 5.19772 4.55228 4.75 4 4.75C3.44772 4.75 3 5.19772 3 5.75C3 6.30228 3.44772 6.75 4 6.75Z" /><path d="M21 5.75C21 6.16422 20.6642 6.5 20.25 6.5L7.75 6.5C7.33579 6.5 7 6.16421 7 5.75C7 5.33579 7.33579 5 7.75 5H20.25C20.6642 5 21 5.33579 21 5.75Z" /><path d="M7 12C7 11.5858 7.33579 11.25 7.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75L7.75 12.75C7.33579 12.75 7 12.4142 7 12Z" /><path d="M21 18.25C21 18.6642 20.6642 19 20.25 19L7.75 19C7.33579 19 7 18.6642 7 18.25C7 17.8358 7.33579 17.5 7.75 17.5L20.25 17.5C20.6642 17.5 21 17.8358 21 18.25Z" /><path d="M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z" /><path d="M4 19.25C4.55228 19.25 5 18.8023 5 18.25C5 17.6977 4.55228 17.25 4 17.25C3.44772 17.25 3 17.6977 3 18.25C3 18.8023 3.44772 19.25 4 19.25Z" />
		</svg>
	);
};

List.iconName = "list";

export default List;