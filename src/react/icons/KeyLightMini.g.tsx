import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const KeyLightMini = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 5C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V13.5H22.75C23.1642 13.5 23.5 13.1642 23.5 12.75C23.5 12.3358 23.1642 12 22.75 12H22V10H22.75C23.1642 10 23.5 9.66421 23.5 9.25C23.5 8.83579 23.1642 8.5 22.75 8.5H22V7C22 5.89543 21.1046 5 20 5H4ZM20 6.5H4C3.72386 6.5 3.5 6.72386 3.5 7V17C3.5 17.2761 3.72386 17.5 4 17.5H20C20.2761 17.5 20.5 17.2761 20.5 17V7C20.5 6.72386 20.2761 6.5 20 6.5Z" clipRule="evenodd" />
		</svg>
	);
};

KeyLightMini.iconName = "key-light-mini";

export default KeyLightMini;