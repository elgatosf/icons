import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Volume1 = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M9.29289 20.2928L5 15.9999H3C1.89543 15.9999 1 15.1045 1 13.9999V9.9999C1 8.89533 1.89543 7.9999 3 7.9999H5L9.29289 3.70701C9.92286 3.07704 11 3.52321 11 4.41411V19.5857C11 20.4766 9.92286 20.9228 9.29289 20.2928ZM5.62132 14.4999H3C2.72386 14.4999 2.5 14.276 2.5 13.9999V9.9999C2.5 9.72376 2.72386 9.4999 3 9.4999H5.62132L9.5 5.62122V18.3786L5.62132 14.4999Z" clipRule="evenodd" /><path d="M14.5355 8.46437C14.2426 8.17147 13.7678 8.17147 13.4749 8.46437C13.182 8.75726 13.182 9.23213 13.4749 9.52503C13.7999 9.85003 14.0577 10.2359 14.2336 10.6605C14.4095 11.0851 14.5 11.5403 14.5 11.9999C14.5 12.4595 14.4095 12.9147 14.2336 13.3393C14.0577 13.7639 13.7999 14.1498 13.4749 14.4748C13.182 14.7677 13.182 15.2425 13.4749 15.5354C13.7678 15.8283 14.2426 15.8283 14.5355 15.5354C14.9998 15.0711 15.3681 14.5199 15.6194 13.9133C15.8707 13.3067 16 12.6565 16 11.9999C16 11.3433 15.8707 10.6931 15.6194 10.0865C15.3681 9.47985 14.9998 8.92866 14.5355 8.46437Z" />
		</svg>
	);
};

Volume1.iconName = "volume1";

export default Volume1;