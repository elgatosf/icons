import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const WaveDx = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7 14.0002C7.55228 14.0002 8 13.5525 8 13.0002C8 12.4479 7.55228 12.0002 7 12.0002C6.44771 12.0002 6 12.4479 6 13.0002C6 13.5525 6.44771 14.0002 7 14.0002Z" /><path fillRule="evenodd" d="M19.2323 3.00424C18.68 2.04765 17.4568 1.7199 16.5002 2.27219L2.99649 10.0686C2.0399 10.6209 1.71215 11.8441 2.26444 12.8006L4.76444 17.1308C5.13517 17.7729 5.80822 18.1317 6.5 18.1311V20.0007C6.5 21.1053 7.39543 22.0007 8.5 22.0007H9C10.1046 22.0007 11 21.1053 11 20.0007V15.8401L21.0002 10.0664C21.9568 9.51413 22.2846 8.29095 21.7323 7.33437L19.2323 3.00424ZM20.4333 8.08437L17.9333 3.75424C17.7952 3.51509 17.4894 3.43316 17.2502 3.57123L9.44616 8.07692L12.4462 13.2731L20.2502 8.76738C20.4894 8.62931 20.5713 8.32351 20.4333 8.08437ZM11.1471 14.0231L8.14712 8.82692L3.74649 11.3676C3.50734 11.5057 3.4254 11.8115 3.56348 12.0506L6.06348 16.3808C6.20155 16.6199 6.50734 16.7018 6.74649 16.5638L11.1471 14.0231ZM8 20.0007V17.5721L9.5 16.7061V20.0007C9.5 20.2769 9.27614 20.5007 9 20.5007H8.5C8.22385 20.5007 8 20.2769 8 20.0007Z" clipRule="evenodd" />
		</svg>
	);
};

WaveDx.iconName = "wave-dx";

export default WaveDx;