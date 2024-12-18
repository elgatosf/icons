import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoFigmaColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#24CB71" d="M5.33301 18.6667C5.33301 16.8258 6.82541 15.3334 8.66634 15.3334H11.9997V18.6667C11.9997 20.5076 10.5073 22 8.66634 22C6.82541 22 5.33301 20.5076 5.33301 18.6667Z" /><path fill="#FF7237" d="M12 2V8.66667H15.3333C17.1743 8.66667 18.6667 7.17427 18.6667 5.33333C18.6667 3.4924 17.1743 2 15.3333 2H12Z" /><path fill="#00B6FF" d="M15.3055 15.3334C17.1465 15.3334 18.6388 13.841 18.6388 12.0001C18.6388 10.1591 17.1465 8.66675 15.3055 8.66675C13.4646 8.66675 11.9722 10.1591 11.9722 12.0001C11.9722 13.841 13.4646 15.3334 15.3055 15.3334Z" /><path fill="#FF3737" d="M5.3335 5.33333C5.3335 7.17427 6.8259 8.66667 8.66683 8.66667H12.0002V2H8.66683C6.8259 2 5.3335 3.4924 5.3335 5.33333Z" /><path fill="#874FFF" d="M5.33301 12C5.33301 13.8409 6.82541 15.3333 8.66634 15.3333H11.9997V8.66663H8.66634C6.82541 8.66663 5.33301 10.159 5.33301 12Z" />
		</svg>
	);
};

LogoFigmaColor.iconName = "logo-figma--color";

export default LogoFigmaColor;