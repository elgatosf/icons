import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Film = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3.63777 6.15268C2.57083 6.43857 1.93767 7.53524 2.22355 8.60217L2.99998 11.4998L2.99998 19C2.99998 20.1046 3.89541 21 4.99998 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8955 20.1046 10 19 10H8.59778L18.4548 7.35885C19.5218 7.07296 20.1549 5.97629 19.869 4.90936L19.6102 3.94343C19.3243 2.8765 18.2277 2.24333 17.1607 2.52922L3.63777 6.15268ZM17.549 3.9781L16.8989 4.15228L15.6227 6.56479L18.0666 5.90996C18.3333 5.83849 18.4916 5.56432 18.4201 5.29758L18.1613 4.33166C18.0899 4.06493 17.8157 3.90663 17.549 3.9781ZM12.5523 5.31696L14.9217 4.68207L13.6455 7.09458L11.276 7.72948L12.5523 5.31696ZM10.5751 5.84675L9.29883 8.25927L6.92938 8.89416L8.20561 6.48165L10.5751 5.84675ZM6.22839 7.01144L4.95217 9.42396L4.06067 9.66283L3.67244 8.21394C3.60097 7.94721 3.75926 7.67304 4.02599 7.60157L6.22839 7.01144ZM4.49998 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12V19C19.5 19.2762 19.2761 19.5 19 19.5H4.99998C4.72384 19.5 4.49998 19.2762 4.49998 19V11.5Z" clipRule="evenodd" />
		</svg>
	);
};

Film.iconName = "film";

export default Film;