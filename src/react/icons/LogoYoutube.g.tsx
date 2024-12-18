import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoYoutube = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M20.5968 4.75955C21.544 5.01309 22.2883 5.75741 22.5418 6.70457H22.54C23 8.41958 23 11.9999 23 11.9999C23 11.9999 23 15.5803 22.54 17.2953C22.2865 18.2424 21.5421 18.9868 20.595 19.2403C18.88 19.7003 12 19.7003 12 19.7003C12 19.7003 5.12002 19.7003 3.405 19.2403C2.45785 18.9868 1.71353 18.2424 1.45999 17.2953C1 15.5803 1 11.9999 1 11.9999C1 11.9999 1 8.41958 1.45999 6.70457C1.71353 5.75741 2.45785 5.01309 3.405 4.75955C5.12002 4.29956 12 4.29956 12 4.29956C12 4.29956 18.88 4.29956 20.5968 4.75955ZM15.5171 12L9.79977 15.2996V8.70032L15.5171 12Z" clipRule="evenodd" />
		</svg>
	);
};

LogoYoutube.iconName = "logo-youtube";

export default LogoYoutube;