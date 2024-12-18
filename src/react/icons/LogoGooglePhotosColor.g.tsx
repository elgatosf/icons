import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGooglePhotosColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#FBBC04" d="M6.49805 6.5459C9.2594 6.5459 11.498 8.7842 11.498 11.5459V12.0001H1.95228C1.70144 12.0001 1.49805 11.7967 1.49805 11.5459C1.49805 8.7842 3.73669 6.5459 6.49805 6.5459Z" /><path fill="#EA4335" d="M16.9523 7.00012C16.9523 9.76148 14.714 12.0001 11.9523 12.0001H11.498V2.45436C11.498 2.20351 11.7014 2.00012 11.9523 2.00012C14.714 2.00012 16.9523 4.23877 16.9523 7.00012Z" /><path fill="#4285F4" d="M16.498 17.4544C13.7367 17.4544 11.498 15.2161 11.498 12.4544V12.0001H21.0438C21.2947 12.0001 21.498 12.2035 21.498 12.4544C21.498 15.2161 19.2594 17.4544 16.498 17.4544Z" /><path fill="#34A853" d="M6.04395 17.0001C6.04395 14.2388 8.28225 12.0001 11.0439 12.0001H11.4982V21.5459C11.4982 21.7967 11.2948 22.0001 11.0439 22.0001C8.28225 22.0001 6.04395 19.7615 6.04395 17.0001Z" />
		</svg>
	);
};

LogoGooglePhotosColor.iconName = "logo-google-photos--color";

export default LogoGooglePhotosColor;