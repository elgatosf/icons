import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoElgato = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M13.4493 8.99698L13.4711 9.01334L21.7623 13.7776C21.3552 16.0517 20.1625 18.1295 18.3969 19.6321C16.603 21.1587 14.3178 22 11.9619 22C9.30141 22 6.80035 20.96 4.91812 19.0712C3.03664 17.1823 2 14.6704 2 12.0001C2 9.32981 3.03664 6.81784 4.91793 4.92884C6.79922 3.04002 9.30028 2 11.9619 2C13.9948 2 15.9492 2.61111 17.6145 3.76565C19.2415 4.89405 20.4865 6.46208 21.2166 8.30088C21.3093 8.53667 21.3957 8.77886 21.4709 9.02218L19.6998 10.0522C19.6387 9.80779 19.5655 9.56447 19.4815 9.32774C18.3531 6.13584 15.3304 3.99054 11.9617 3.99054C7.5619 3.99054 3.98264 7.5839 3.98264 12.0001C3.98264 16.4163 7.5619 20.0096 11.9617 20.0096C13.6717 20.0096 15.302 19.4728 16.678 18.4557C18.0257 17.4595 19.0144 16.0942 19.5371 14.5087L19.5426 14.4737L9.87323 8.92064V14.9421L13.2069 13.0138L14.9235 13.9982L9.92663 16.8888L8.15985 15.8783V7.99532L9.92437 6.97504L13.4502 8.99811L13.4493 8.99698Z" />
		</svg>
	);
};

LogoElgato.iconName = "logo-elgato";

export default LogoElgato;