import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGameCaptureFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9.5 8.65948L15.2857 11.9998L9.5 15.3402V8.65948Z" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8 7.54609V16.4537L9.28571 17.196L16.9999 12.7422L17 11.2576L9.28571 6.80371L8 7.54609Z" clipRule="evenodd" />
		</svg>
	);
};

LogoGameCaptureFilled.iconName = "logo-game-capture--filled";

export default LogoGameCaptureFilled;