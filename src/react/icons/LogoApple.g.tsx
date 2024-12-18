import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoApple = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M19.7636 7.81868C19.6476 7.90869 17.5994 9.06281 17.5994 11.6291C17.5994 14.5974 20.2056 15.6475 20.2836 15.6735C20.2716 15.7375 19.8696 17.1116 18.9095 18.5118C18.0534 19.7439 17.1593 20.974 15.7992 20.974C14.439 20.974 14.089 20.1839 12.5189 20.1839C10.9887 20.1839 10.4446 21 9.20052 21C7.9564 21 7.08831 19.8599 6.09021 18.4597C4.93409 16.8156 4 14.2613 4 11.8371C4 7.9487 6.52825 5.88649 9.0165 5.88649C10.3386 5.88649 11.4407 6.75458 12.2708 6.75458C13.0609 6.75458 14.293 5.83448 15.7972 5.83448C16.3672 5.83448 18.4154 5.88649 19.7636 7.81868ZM15.0831 4.18832C15.7052 3.45024 16.1452 2.42614 16.1452 1.40204C16.1452 1.26003 16.1332 1.11601 16.1072 1C15.0951 1.038 13.891 1.67407 13.1649 2.51615C12.5949 3.16422 12.0628 4.18832 12.0628 5.22642C12.0628 5.38244 12.0888 5.53845 12.1008 5.58846C12.1648 5.60046 12.2688 5.61446 12.3728 5.61446C13.2809 5.61446 14.423 5.0064 15.0831 4.18832Z" />
		</svg>
	);
};

LogoApple.iconName = "logo-apple";

export default LogoApple;