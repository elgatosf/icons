import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AspectRatio = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M20 20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.0355 2.787 19.8873 3.79551 19.9897C3.86275 19.9965 3.93096 20 4 20H20ZM20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V8H16C17.1046 8 18 8.89543 18 10V18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V6C20.5 5.72386 20.2761 5.5 20 5.5ZM12.5 9.5H3.5V18C3.5 18.2589 3.69675 18.4718 3.94888 18.4974C3.96569 18.4991 3.98274 18.5 4 18.5H12.5V9.5ZM14 18.5H16.5V10C16.5 9.72386 16.2761 9.5 16 9.5H14V18.5Z" clipRule="evenodd" />
		</svg>
	);
};

AspectRatio.iconName = "aspect-ratio";

export default AspectRatio;