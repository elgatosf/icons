import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CamcorderFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M18 6C18 4.89543 17.1046 4 16 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H16C17.1046 20 18 19.1046 18 18V16.0415L20.75 17.6292C21.75 18.2065 23 17.4848 23 16.3301V7.66987C23 6.51517 21.75 5.79348 20.75 6.37084L18 7.95855V6Z" clipRule="evenodd" />
		</svg>
	);
};

CamcorderFilled.iconName = "camcorder--filled";

export default CamcorderFilled;