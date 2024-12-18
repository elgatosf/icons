import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CompassFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.91403 15.7808C6.57559 16.6027 7.39753 17.4246 8.21946 17.0862L14.115 14.6586C14.3615 14.5571 14.5573 14.3613 14.6589 14.1147L17.0864 8.21922C17.4249 7.39728 16.6029 6.57535 15.781 6.91379L9.88552 9.34134C9.63894 9.44288 9.44312 9.63869 9.34159 9.88527L6.91403 15.7808ZM15.2425 8.75771L10.6493 10.649L13.3512 13.3509L15.2425 8.75771Z" clipRule="evenodd" />
		</svg>
	);
};

CompassFilled.iconName = "compass--filled";

export default CompassFilled;