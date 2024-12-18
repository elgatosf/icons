import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PhoneFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M20.9999 19V14.8663C20.9999 14.3452 20.6767 13.8788 20.1888 13.6959L17.7536 12.7826C17.2946 12.6105 16.7774 12.7226 16.4308 13.0692L14.9786 14.5214C13.8144 13.913 12.7442 13.129 11.8076 12.1924C10.8709 11.2558 10.087 10.1856 9.47859 9.02138L10.9308 7.56915C11.2774 7.22254 11.3895 6.70533 11.2174 6.24636L10.3041 3.8111C10.1212 3.32322 9.65477 3 9.13372 3L4.99997 3C3.8954 3 2.98848 3.89814 3.11097 4.9959C3.29825 6.67449 3.72124 8.32174 4.37014 9.8883C5.27472 12.0722 6.60059 14.0565 8.27204 15.7279C9.9435 17.3994 11.9278 18.7253 14.1116 19.6299C15.6782 20.2788 17.3254 20.7018 19.004 20.889C20.1018 21.0115 20.9999 20.1046 20.9999 19Z" />
		</svg>
	);
};

PhoneFilled.iconName = "phone--filled";

export default PhoneFilled;