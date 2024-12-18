import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Bluetooth = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.4449 2.31489C11.7154 2.19439 12.0316 2.24441 12.2517 2.44254L17.2517 6.94254C17.4098 7.08477 17.5 7.2874 17.5 7.50001C17.5 7.71263 17.4098 7.91525 17.2517 8.05748L12.8711 12L17.2517 15.9425C17.4098 16.0848 17.5 16.2874 17.5 16.5C17.5 16.7126 17.4098 16.9153 17.2517 17.0575L12.2517 21.5575C12.0316 21.7556 11.7154 21.8056 11.4449 21.6851C11.1743 21.5646 11 21.2962 11 21V13.684L7.25173 17.0575C6.94385 17.3346 6.46963 17.3096 6.19254 17.0017C5.91544 16.6939 5.9404 16.2196 6.24828 15.9425L10.6289 12L6.24828 8.05748C5.9404 7.78039 5.91544 7.30617 6.19254 6.99829C6.46963 6.69041 6.94385 6.66545 7.25173 6.94254L11 10.316V3.00001C11 2.70383 11.1743 2.43539 11.4449 2.31489ZM12.5 13.684L15.6289 16.5L12.5 19.316V13.684ZM12.5 10.316V4.68404L15.6289 7.50001L12.5 10.316Z" clipRule="evenodd" />
		</svg>
	);
};

Bluetooth.iconName = "bluetooth";

export default Bluetooth;