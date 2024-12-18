import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChapterMarker = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.7668 3C14.3526 3 14.0168 3.33579 14.0168 3.75C14.0168 4.16421 14.3526 4.5 14.7668 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H14.7668Z" /><path d="M14.7668 8.49863C14.3526 8.49863 14.0168 8.83442 14.0168 9.24863C14.0168 9.66285 14.3526 9.99863 14.7668 9.99863H20.25C20.6642 9.99863 21 9.66285 21 9.24863C21 8.83442 20.6642 8.49863 20.25 8.49863H14.7668Z" /><path d="M3 14.7473C3 14.3331 3.33579 13.9973 3.75 13.9973H20.25C20.6642 13.9973 21 14.3331 21 14.7473C21 15.1615 20.6642 15.4973 20.25 15.4973H3.75C3.33579 15.4973 3 15.1615 3 14.7473Z" /><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H11.2593C11.6735 21 12.0093 20.6642 12.0093 20.25C12.0093 19.8358 11.6735 19.5 11.2593 19.5H3.75Z" /><path fillRule="evenodd" d="M9 3H5C3.89543 3 3 3.89543 3 5V7.17157C3 7.70201 3.21071 8.21071 3.58579 8.58579L5.58579 10.5858C6.36683 11.3668 7.63316 11.3668 8.41421 10.5858L10.4142 8.58579C10.7893 8.21071 11 7.70201 11 7.17157V5C11 3.89543 10.1046 3 9 3Z" clipRule="evenodd" />
		</svg>
	);
};

ChapterMarker.iconName = "chapter-marker";

export default ChapterMarker;