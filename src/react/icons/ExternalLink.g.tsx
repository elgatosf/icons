import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ExternalLink = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4.5 5C4.5 4.72386 4.72386 4.5 5 4.5H8.25C8.66421 4.5 9 4.16421 9 3.75C9 3.33579 8.66421 3 8.25 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15.75C21 15.3358 20.6642 15 20.25 15C19.8358 15 19.5 15.3358 19.5 15.75V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5Z" /><path d="M12.75 3C12.3358 3 12 3.33579 12 3.75C12 4.16421 12.3358 4.5 12.75 4.5H18.4393L11.2197 11.7197C10.9268 12.0126 10.9268 12.4874 11.2197 12.7803C11.5126 13.0732 11.9874 13.0732 12.2803 12.7803L19.5 5.56066V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V3.75C21 3.33579 20.6642 3 20.25 3H12.75Z" />
		</svg>
	);
};

ExternalLink.iconName = "external-link";

export default ExternalLink;