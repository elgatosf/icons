import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoAmazonAlexa = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.9996 2C6.47707 2 2 6.47723 2 12C2 17.0708 5.77422 21.2596 10.6664 21.9114V19.8963C10.6664 19.3281 10.3081 18.8174 9.76951 18.6368C6.94682 17.6886 4.92755 14.9904 5.00186 11.8314C5.09241 7.98534 8.22516 4.96154 12.0718 5.00031C15.9044 5.03908 18.9994 8.15811 18.9994 12C18.9994 12.0876 18.9973 12.1747 18.9941 12.2614C18.9933 12.2808 18.9927 12.3003 18.9919 12.3198C18.9882 12.4004 18.9833 12.4808 18.977 12.5607C18.975 12.5861 18.9725 12.6115 18.9702 12.6367C18.9653 12.6926 18.9596 12.7479 18.9533 12.8032C18.9462 12.8662 18.938 12.9285 18.9293 12.9907C18.9254 13.019 18.9216 13.0475 18.9173 13.0757C18.0602 18.7212 10.7076 21.8943 10.6673 21.9115C11.1032 21.9695 11.5479 22 11.9996 22C17.5223 22 21.9993 17.5229 21.9993 12C21.9993 6.47723 17.5223 2 11.9996 2Z" clipRule="evenodd" />
		</svg>
	);
};

LogoAmazonAlexa.iconName = "logo-amazon-alexa";

export default LogoAmazonAlexa;