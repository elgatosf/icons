import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon6Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12.1874 16.1431C13.7934 16.1431 15.0694 15.0211 15.0694 13.3051C15.0694 11.7101 13.9914 10.6981 12.6054 10.6981C11.7364 10.6981 11.0764 11.0171 10.6254 11.8091C10.6364 10.7421 10.8564 8.92712 12.1874 8.92712C12.8144 8.92712 13.2324 9.25712 13.2324 9.99412H14.8164C14.8164 8.48712 13.6394 7.84912 12.2424 7.84912C9.8554 7.84912 9.0744 9.91712 9.0744 12.0731C9.0744 14.2291 9.8334 16.1431 12.1874 16.1431ZM12.2204 11.7761C13.1224 11.7761 13.5404 12.4911 13.5404 13.3711C13.5404 14.2621 13.0894 14.9881 12.1874 14.9881C11.3074 14.9881 10.8014 14.2841 10.8014 13.4041C10.8014 12.5351 11.1864 11.7761 12.2204 11.7761Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Icon6Square.iconName = "6-square";

export default Icon6Square;