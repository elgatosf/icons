import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGmailColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#C5221F" d="M1 5.75001V7.75001L3.29375 9.97001L6 11.5L6.5 8.13376L6 5.00001L4.6 3.95001C3.11625 2.83751 1 3.89626 1 5.75001Z" /><path fill="#FFBA00" d="M18 5.00001L17.5 8.17501L18 11.5L20.4562 10.2838L23 7.75001V5.75001C23 3.89626 20.8837 2.83751 19.4 3.95001L18 5.00001Z" /><path fill="#2684FC" d="M2.5 20H6V11.5L1 7.75V18.5C1 19.3287 1.67125 20 2.5 20Z" /><path fill="#00AC47" d="M18 20H21.5C22.3288 20 23 19.3287 23 18.5V7.75L18 11.5V20Z" /><path fill="#E94235" d="M12 9.5L6 5V11.5L12 16L18 11.5V5L12 9.5Z" />
		</svg>
	);
};

LogoGmailColor.iconName = "logo-gmail--color";

export default LogoGmailColor;