import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGmail = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M20.5005 2.99988C20.0005 2.99988 19.4005 3.19988 18.9005 3.59988L12.0005 9.29988L5.10049 3.59988C4.60049 3.19988 4.00049 2.99988 3.50049 2.99988C2.20049 2.99988 1.00049 3.99988 1.00049 5.49988V17.9999C1.00049 19.0999 1.90049 19.9999 3.00049 19.9999H7.00049V12.9999L12.0005 16.9999L17.0005 12.9999V19.9999H21.0005C22.1005 19.9999 23.0005 19.0999 23.0005 17.9999V5.49988C23.0005 3.99988 21.8005 2.99988 20.5005 2.99988ZM21.0005 17.9999H19.0005V8.79988L12.0005 14.4999L5.00049 8.79988V17.9999H3.00049V5.47988C3.00049 5.05988 3.49049 4.82988 3.82049 5.08988L12.0005 11.7999L20.1805 5.08988C20.5105 4.82988 21.0005 5.05988 21.0005 5.47988V17.9999Z" />
		</svg>
	);
};

LogoGmail.iconName = "logo-gmail";

export default LogoGmail;