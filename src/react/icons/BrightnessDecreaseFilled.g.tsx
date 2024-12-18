import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const BrightnessDecreaseFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V5C12.75 5.41421 12.4142 5.75 12 5.75C11.5858 5.75 11.25 5.41421 11.25 5V2.75C11.25 2.33579 11.5858 2 12 2Z" /><path d="M19.071 4.9289C19.3639 5.22179 19.3639 5.69667 19.071 5.98956L17.4801 7.58055C17.1872 7.87344 16.7123 7.87344 16.4194 7.58055C16.1265 7.28766 16.1265 6.81278 16.4194 6.51989L18.0104 4.9289C18.3033 4.63601 18.7781 4.63601 19.071 4.9289Z" /><path d="M22 12C22 12.4142 21.6642 12.75 21.25 12.75H19C18.5858 12.75 18.25 12.4142 18.25 12C18.25 11.5858 18.5858 11.25 19 11.25H21.25C21.6642 11.25 22 11.5858 22 12Z" /><path d="M19.0711 19.0711C18.7782 19.364 18.3033 19.364 18.0104 19.0711L16.4195 17.4801C16.1266 17.1872 16.1266 16.7123 16.4195 16.4195C16.7123 16.1266 17.1872 16.1266 17.4801 16.4195L19.0711 18.0104C19.364 18.3033 19.364 18.7782 19.0711 19.0711Z" /><path d="M12 22C11.5858 22 11.25 21.6642 11.25 21.25V19C11.25 18.5858 11.5858 18.25 12 18.25C12.4142 18.25 12.75 18.5858 12.75 19V21.25C12.75 21.6642 12.4142 22 12 22Z" /><path d="M4.92896 19.0711C4.63607 18.7782 4.63607 18.3033 4.92896 18.0104L6.51995 16.4195C6.81284 16.1266 7.28772 16.1266 7.58061 16.4195C7.8735 16.7123 7.8735 17.1872 7.58061 17.4801L5.98962 19.0711C5.69673 19.364 5.22185 19.364 4.92896 19.0711Z" /><path d="M2 12C2 11.5858 2.33579 11.25 2.75 11.25H5C5.41421 11.25 5.75 11.5858 5.75 12C5.75 12.4142 5.41421 12.75 5 12.75H2.75C2.33579 12.75 2 12.4142 2 12Z" /><path d="M4.9289 4.9289C5.22179 4.63601 5.69667 4.63601 5.98956 4.9289L7.58055 6.51989C7.87344 6.81278 7.87344 7.28766 7.58055 7.58055C7.28766 7.87344 6.81278 7.87344 6.51989 7.58055L4.9289 5.98956C4.63601 5.69667 4.63601 5.22179 4.9289 4.9289Z" /><path fillRule="evenodd" d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM9.75 11.25C9.33579 11.25 9 11.5858 9 12C9 12.4142 9.33579 12.75 9.75 12.75H14.25C14.6642 12.75 15 12.4142 15 12C15 11.5858 14.6642 11.25 14.25 11.25H9.75Z" clipRule="evenodd" />
		</svg>
	);
};

BrightnessDecreaseFilled.iconName = "brightness-decrease--filled";

export default BrightnessDecreaseFilled;