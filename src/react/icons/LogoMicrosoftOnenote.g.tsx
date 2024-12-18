import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMicrosoftOnenote = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21.1699 3.25C21.3978 3.25 21.5931 3.33138 21.7559 3.49414C21.9186 3.6569 22 3.85221 22 4.08008V19.9199C22 20.1478 21.9186 20.3431 21.7559 20.5059C21.5931 20.6686 21.3978 20.75 21.1699 20.75H7.83008C7.60221 20.75 7.4069 20.6686 7.24414 20.5059C7.08138 20.3431 7 20.1478 7 19.9199V17H2.83008C2.60221 17 2.4069 16.9186 2.24414 16.7559C2.08138 16.5931 2 16.3978 2 16.1699V7.83008C2 7.60221 2.08138 7.4069 2.24414 7.24414C2.4069 7.08138 2.60221 7 2.83008 7H7V4.08008C7 3.85221 7.08138 3.6569 7.24414 3.49414C7.4069 3.33138 7.60221 3.25 7.83008 3.25H21.1699ZM5.79883 11.1699L8.16211 15.2715H9.64648V8.72852H8.20117V12.918L5.92578 8.72852H4.35352V15.2715H5.79883V11.1699ZM20.75 19.5V17H18.25V19.5H20.75ZM20.75 15.75V13.25H18.25V15.75H20.75ZM20.75 12V9.5H18.25V12H20.75ZM20.75 8.25V4.5H8.25V7H11.1699C11.3978 7 11.5931 7.08138 11.7559 7.24414C11.9186 7.4069 12 7.60221 12 7.83008V16.1699C12 16.3978 11.9186 16.5931 11.7559 16.7559C11.5931 16.9186 11.3978 17 11.1699 17H8.25V19.5H17V8.25H20.75Z" />
		</svg>
	);
};

LogoMicrosoftOnenote.iconName = "logo-microsoft-onenote";

export default LogoMicrosoftOnenote;