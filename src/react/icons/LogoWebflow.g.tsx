import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoWebflow = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M23.9437 5L16.7822 19H10.0556L13.0526 13.1978H12.9182C10.4456 16.4075 6.75646 18.5205 1.5 19V13.2781C1.5 13.2781 4.86268 13.0795 6.83951 11.0011H1.5V5.00011H7.50103V9.93587L7.63572 9.93532L10.088 5.00011H14.6264V9.90457L14.761 9.90436L17.3053 5H23.9437Z" clipRule="evenodd" />
		</svg>
	);
};

LogoWebflow.iconName = "logo-webflow";

export default LogoWebflow;