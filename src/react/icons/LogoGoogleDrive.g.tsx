import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleDrive = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.3499 2.5H9.64986C8.93986 2.5 8.27986 2.88 7.91986 3.49L1.57986 14.4C1.21986 15.02 1.21986 15.78 1.56986 16.4L3.91986 20.49C4.27986 21.11 4.93986 21.49 5.64986 21.49H18.3299C19.0499 21.49 19.7099 21.11 20.0599 20.49L22.4099 16.4C22.7699 15.78 22.7599 15.02 22.3999 14.4L16.0799 3.49C15.7199 2.88 15.0599 2.5 14.3499 2.5ZM18.3399 19.5H5.65986L3.30986 15.41L9.64986 4.5H14.3499L20.6899 15.41L18.3399 19.5ZM12.8999 7.75H11.0999L6.51986 15.73L7.24986 17H16.7499L17.4799 15.73L12.8999 7.75ZM9.24986 15L11.9999 10.2L14.7499 15H9.24986Z" />
		</svg>
	);
};

LogoGoogleDrive.iconName = "logo-google-drive";

export default LogoGoogleDrive;