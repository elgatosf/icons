import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FilmFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3.63777 6.15274C2.57083 6.43863 1.93767 7.5353 2.22355 8.60223L2.99998 11.4999L2.99998 19.0001C2.99998 20.1047 3.89541 21.0001 4.99998 21.0001H19C20.1046 21.0001 21 20.1047 21 19.0001V12.0001C21 10.8955 20.1046 10.0001 19 10.0001H8.59778L18.4548 7.35891C19.5218 7.07302 20.1549 5.97635 19.869 4.90942L19.6102 3.94349C19.3243 2.87656 18.2277 2.24339 17.1607 2.52928L3.63777 6.15274ZM17.549 3.97817L16.8989 4.15234L15.6227 6.56485L18.0666 5.91002C18.3333 5.83855 18.4916 5.56438 18.4201 5.29765L18.1613 4.33172C18.0899 4.06499 17.8157 3.9067 17.549 3.97817ZM12.5523 5.31702L14.9217 4.68213L13.6455 7.09465L11.276 7.72954L12.5523 5.31702ZM10.5751 5.84682L9.29883 8.25933L6.92938 8.89422L8.20561 6.48171L10.5751 5.84682ZM6.22839 7.0115L4.95217 9.42402L4.06067 9.66289L3.67244 8.214C3.60097 7.94727 3.75926 7.6731 4.02599 7.60163L6.22839 7.0115Z" clipRule="evenodd" />
		</svg>
	);
};

FilmFilled.iconName = "film--filled";

export default FilmFilled;