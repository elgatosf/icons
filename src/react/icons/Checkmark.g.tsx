import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Checkmark = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M19.7803 7.21967C20.0732 7.51256 20.0732 7.98744 19.7803 8.28033L10.2803 17.7803C9.98744 18.0732 9.51256 18.0732 9.21967 17.7803L4.21967 12.7803C3.92678 12.4874 3.92678 12.0126 4.21967 11.7197C4.51256 11.4268 4.98744 11.4268 5.28033 11.7197L9.75 16.1893L18.7197 7.21967C19.0126 6.92678 19.4874 6.92678 19.7803 7.21967Z" />
		</svg>
	);
};

Checkmark.iconName = "checkmark";

export default Checkmark;