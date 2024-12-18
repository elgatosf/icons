import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const KeyLightMiniFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M19 8H5V16H19V8Z" /><path fillRule="evenodd" d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V8.5H22.75C23.1642 8.5 23.5 8.83579 23.5 9.25C23.5 9.66421 23.1642 10 22.75 10H22V12H22.75C23.1642 12 23.5 12.3358 23.5 12.75C23.5 13.1642 23.1642 13.5 22.75 13.5H22V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7ZM4 6.5H20C20.2761 6.5 20.5 6.72386 20.5 7V17C20.5 17.2761 20.2761 17.5 20 17.5H4C3.72386 17.5 3.5 17.2761 3.5 17V7C3.5 6.72386 3.72386 6.5 4 6.5Z" clipRule="evenodd" />
		</svg>
	);
};

KeyLightMiniFilled.iconName = "key-light-mini--filled";

export default KeyLightMiniFilled;