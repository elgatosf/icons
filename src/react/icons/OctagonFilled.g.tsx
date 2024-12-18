import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const OctagonFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M15.1066 2.5C15.637 2.5 16.1457 2.71071 16.5208 3.08579L20.9142 7.47918C21.2893 7.85426 21.5 8.36296 21.5 8.8934V15.1066C21.5 15.637 21.2893 16.1457 20.9142 16.5208L16.5208 20.9142C16.1457 21.2893 15.637 21.5 15.1066 21.5L8.8934 21.5C8.36297 21.5 7.85426 21.2893 7.47918 20.9142L3.08579 16.5208C2.71071 16.1457 2.5 15.637 2.5 15.1066V8.8934C2.5 8.36297 2.71071 7.85426 3.08579 7.47919L7.47918 3.08579C7.85426 2.71071 8.36297 2.5 8.8934 2.5H15.1066Z" clipRule="evenodd" />
		</svg>
	);
};

OctagonFilled.iconName = "octagon--filled";

export default OctagonFilled;