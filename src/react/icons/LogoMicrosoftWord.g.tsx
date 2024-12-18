import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMicrosoftWord = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21.1699 3.25C21.3978 3.25 21.5931 3.33138 21.7559 3.49414C21.9186 3.6569 22 3.85221 22 4.08008V19.9199C22 20.1478 21.9186 20.3431 21.7559 20.5059C21.5931 20.6686 21.3978 20.75 21.1699 20.75H7.83008C7.60221 20.75 7.4069 20.6686 7.24414 20.5059C7.08138 20.3431 7 20.1478 7 19.9199V17H2.83008C2.60221 17 2.4069 16.9186 2.24414 16.7559C2.08138 16.5931 2 16.3978 2 16.1699V7.83008C2 7.60221 2.08138 7.4069 2.24414 7.24414C2.4069 7.08138 2.60221 7 2.83008 7H7V4.08008C7 3.85221 7.08138 3.6569 7.24414 3.49414C7.4069 3.33138 7.60221 3.25 7.83008 3.25H21.1699ZM7.0293 11.3359L8.23047 15.2812H9.59766L10.9062 8.71875H9.5293L8.74805 12.5957L7.64453 8.8457H6.48242L5.31055 12.6152L4.5293 8.71875H3.09375L4.40234 15.2812H5.76953L7.0293 11.3359ZM20.75 19.5V17H8.25V19.5H20.75ZM20.75 15.75V12.625H12V15.75H20.75ZM20.75 11.375V8.25H12V11.375H20.75ZM20.75 7V4.5H8.25V7H20.75Z" />
		</svg>
	);
};

LogoMicrosoftWord.iconName = "logo-microsoft-word";

export default LogoMicrosoftWord;