import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const WrenchFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 9.5C3 8.48303 3.23355 7.52061 3.64994 6.66345C3.91791 6.11181 4.64249 6.05668 5.07614 6.49033L8.79306 10.2073C9.18358 10.5978 9.81675 10.5978 10.2073 10.2073C10.5978 9.81673 10.5978 9.18356 10.2073 8.79304L6.49037 5.07613C6.05671 4.64247 6.11184 3.91789 6.66348 3.64992C7.52064 3.23354 8.48305 3 9.5 3C13.0899 3 16 5.91015 16 9.5C16 9.97031 15.95 10.429 15.8552 10.8709C15.7769 11.2356 15.8655 11.6229 16.1292 11.8866L20.4142 16.1716C21.1953 16.9526 21.1953 18.219 20.4142 19L19 20.4142C18.219 21.1953 16.9526 21.1953 16.1716 20.4142L11.8866 16.1292C11.6229 15.8655 11.2356 15.7769 10.871 15.8552C10.429 15.95 9.97032 16 9.5 16C5.91015 16 3 13.0899 3 9.5Z" />
		</svg>
	);
};

WrenchFilled.iconName = "wrench--filled";

export default WrenchFilled;