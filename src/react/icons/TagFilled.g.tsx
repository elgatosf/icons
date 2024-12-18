import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TagFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M19 3H12.8284C12.298 3 11.7893 3.21071 11.4142 3.58579L3.41421 11.5858C2.63316 12.3668 2.63317 13.6332 3.41421 14.4142L9.58579 20.5858C10.3668 21.3668 11.6332 21.3668 12.4142 20.5858L20.4142 12.5858C20.7893 12.2107 21 11.702 21 11.1716V5C21 3.89543 20.1046 3 19 3ZM16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z" clipRule="evenodd" />
		</svg>
	);
};

TagFilled.iconName = "tag--filled";

export default TagFilled;