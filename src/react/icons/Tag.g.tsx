import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Tag = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z" /><path fillRule="evenodd" d="M12.8284 3C12.298 3 11.7893 3.21071 11.4142 3.58579L3.41421 11.5858C2.63316 12.3668 2.63317 13.6332 3.41421 14.4142L9.58579 20.5858C10.3668 21.3668 11.6332 21.3668 12.4142 20.5858L20.4142 12.5858C20.7893 12.2107 21 11.702 21 11.1716V5C21 3.89543 20.1046 3 19 3H12.8284ZM19 4.5H12.8284C12.6958 4.5 12.5686 4.55268 12.4749 4.64645L4.47487 12.6464C4.27961 12.8417 4.27961 13.1583 4.47487 13.3536L10.6464 19.5251C10.8417 19.7204 11.1583 19.7204 11.3536 19.5251L19.3536 11.5251C19.4473 11.4314 19.5 11.3042 19.5 11.1716V5C19.5 4.72386 19.2761 4.5 19 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Tag.iconName = "tag";

export default Tag;