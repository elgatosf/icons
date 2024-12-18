import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoEthereum = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M5.09375 12.1566L12 1L18.9063 12.1566L12 16.1085L5.09375 12.1566Z" /><path d="M12 23L5.17205 13.4876L12 17.4804L18.8279 13.4876L12 23Z" />
		</svg>
	);
};

LogoEthereum.iconName = "logo-ethereum";

export default LogoEthereum;