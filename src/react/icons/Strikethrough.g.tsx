import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Strikethrough = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.9995 21C7.03366 20.9974 5.60462 17.1699 5.54464 17C5.40464 16.61 5.60464 16.18 5.99464 16.04C6.38464 15.9 6.81464 16.1 6.95464 16.49C6.99464 16.61 8.11464 19.49 11.9946 19.49C14.5646 19.49 16.4946 18.09 16.4946 16.24C16.4946 14.8431 15.89 14.0509 14.803 13.5H3.75C3.33579 13.5 3 13.1642 3 12.75C3 12.3358 3.33579 12 3.75 12H20.25C20.6642 12 21 12.3358 21 12.75C21 13.1642 20.6642 13.5 20.25 13.5H17.1463C17.6721 14.1818 17.9946 15.0699 17.9946 16.25C17.9946 18.9587 15.4171 20.9981 11.9995 21Z" /><path d="M11.9995 21L11.9946 21H12.0046L11.9995 21Z" /><path d="M6.87729 10.5H9.71949C8.30685 10.0398 7.49464 9.41148 7.49464 8C7.49464 5.97 9.38464 4.5 11.9946 4.5C15.7888 4.5 16.4789 7.2668 16.5142 7.40836L16.5146 7.41C16.6046 7.81 17.0046 8.06 17.4046 7.98C17.8146 7.89 18.0746 7.5 17.9846 7.09C17.6846 5.68 16.0446 3 12.0046 3C8.52464 3 6.00464 5.1 5.99464 7.99C5.99464 9.08893 6.33099 9.89354 6.87729 10.5Z" />
		</svg>
	);
};

Strikethrough.iconName = "strikethrough";

export default Strikethrough;