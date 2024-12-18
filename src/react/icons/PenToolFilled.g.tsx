import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PenToolFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2.76675 3.82741L10.1583 11.219C10.0564 11.4589 10.0001 11.7229 10.0001 12.0001C10.0001 13.1046 10.8955 14.0001 12.0001 14.0001C13.1046 14.0001 14.0001 13.1046 14.0001 12.0001C14.0001 10.8955 13.1046 10.0001 12.0001 10.0001C11.7229 10.0001 11.4589 10.0564 11.219 10.1583L3.82747 2.76681C4.08364 2.66944 4.36801 2.62711 4.6665 2.65388C8.23869 2.97421 15.2122 3.89865 17.6569 6.34333C19.8836 8.57001 20.5233 11.7827 19.5759 14.5759L21.0858 16.0858C21.8668 16.8668 21.8668 18.1332 21.0858 18.9142L18.9142 21.0858C18.1332 21.8668 16.8668 21.8668 16.0858 21.0858L14.576 19.576C11.7827 20.5234 8.56993 19.8838 6.3432 17.657C3.89853 15.2124 2.97409 8.23882 2.65376 4.66662C2.62698 4.36806 2.66934 4.08363 2.76675 3.82741Z" />
		</svg>
	);
};

PenToolFilled.iconName = "pen-tool--filled";

export default PenToolFilled;