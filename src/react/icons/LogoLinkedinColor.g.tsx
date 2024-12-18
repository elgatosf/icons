import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoLinkedinColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#0A66C2" d="M19.6354 3H4.36496C3.68248 3 3.08531 3.6 3 4.28571V19.7143C3 20.4 3.59717 21 4.36496 21H19.6354C20.3179 21 20.9151 20.4 21.0004 19.7143V4.28571C21.0004 3.6 20.4032 3 19.6354 3Z" /><path fill="white" d="M5.73005 18.3429H8.37466V9.77143H5.73005V18.3429Z" /><path fill="white" d="M5.47412 7.02857C5.47412 7.88572 6.1566 8.57143 7.0097 8.57143C7.8628 8.57143 8.54528 7.88572 8.54528 7.02857C8.54528 6.17143 7.8628 5.48572 7.0097 5.48572C6.1566 5.48572 5.47412 6.17143 5.47412 7.02857Z" /><path fill="white" d="M15.7113 18.3429H18.3559L18.2706 13.7143C18.2706 11.4 17.8441 9.6 15.1141 9.6C14.0904 9.51429 13.152 10.1143 12.6402 10.9714V9.77143H10.0809V18.3429H12.7255V14.0571C12.7255 12.9429 12.9814 11.8286 14.3464 11.8286C15.7113 11.8286 15.7113 13.1143 15.7113 14.1429V18.3429Z" />
		</svg>
	);
};

LogoLinkedinColor.iconName = "logo-linkedin--color";

export default LogoLinkedinColor;