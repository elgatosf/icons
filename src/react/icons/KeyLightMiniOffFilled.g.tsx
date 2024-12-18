import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const KeyLightMiniOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2.21967 20.7197C1.92678 21.0126 1.92678 21.4874 2.21967 21.7803C2.51256 22.0732 2.98744 22.0732 3.28033 21.7803L6.06066 19H20C21.1046 19 22 18.1046 22 17V13.5H22.75C23.1642 13.5 23.5 13.1642 23.5 12.75C23.5 12.3358 23.1642 12 22.75 12H22V10H22.75C23.1642 10 23.5 9.66421 23.5 9.25C23.5 8.83579 23.1642 8.5 22.75 8.5H22V7C22 5.91543 21.1367 5.03249 20.0598 5.00088L21.7803 3.28033C22.0732 2.98744 22.0732 2.51256 21.7803 2.21967C21.4874 1.92678 21.0126 1.92678 20.7197 2.21967L2.21967 20.7197ZM20 17.5H7.56066L9.06066 16H19V8H17.0607L18.5607 6.5H20C20.2761 6.5 20.5 6.72386 20.5 7V17C20.5 17.2761 20.2761 17.5 20 17.5Z" clipRule="evenodd" /><path d="M2.49907 18.3219L3.56838 17.2526C3.52492 17.1784 3.5 17.0921 3.5 17V7C3.5 6.72386 3.72386 6.5 4 6.5H14.3209L15.8209 5H4C2.89543 5 2 5.89543 2 7V17C2 17.5067 2.18844 17.9694 2.49907 18.3219Z" /><path d="M5 15.8209L12.8209 8H5V15.8209Z" />
		</svg>
	);
};

KeyLightMiniOffFilled.iconName = "key-light-mini-off--filled";

export default KeyLightMiniOffFilled;