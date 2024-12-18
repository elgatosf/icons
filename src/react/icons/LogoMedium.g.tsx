import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMedium = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M13.4074 12.0002C13.4074 15.4504 10.6294 18.2473 7.20281 18.2473C3.77622 18.2473 0.998047 15.4497 0.998047 12.0002C0.998047 8.55058 3.776 5.75281 7.20281 5.75281C10.6296 5.75281 13.4074 8.54995 13.4074 12.0002Z" /><path d="M20.2145 12.0002C20.2145 15.2478 18.8256 17.8816 17.1122 17.8816C15.3987 17.8816 14.0098 15.2478 14.0098 12.0002C14.0098 8.75254 15.3985 6.11877 17.1119 6.11877C18.8253 6.11877 20.2145 8.7517 20.2145 12.0002Z" /><path d="M21.9073 17.2689C22.51 17.2689 22.9984 14.9092 22.9984 12.0001C22.9984 9.09021 22.5098 6.73132 21.9073 6.73132C21.3048 6.73132 20.8164 9.09042 20.8164 12.0001C20.8164 14.9098 21.3046 17.2689 21.9073 17.2689Z" />
		</svg>
	);
};

LogoMedium.iconName = "logo-medium";

export default LogoMedium;