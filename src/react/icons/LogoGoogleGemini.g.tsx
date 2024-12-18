import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleGemini = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<g clipPath="url(#prefix__clip0_3603_969)"><path d="M12 24C12 22.34 11.68 20.78 11.04 19.32C10.42 17.86 9.57 16.59 8.49 15.51C7.41 14.43 6.14 13.58 4.68 12.96C3.22 12.32 1.66 12 0 12C1.66 12 3.22 11.69 4.68 11.07C6.14 10.43 7.41 9.57 8.49 8.49C9.57 7.41 10.42 6.14 11.04 4.68C11.68 3.22 12 1.66 12 0C12 1.66 12.31 3.22 12.93 4.68C13.57 6.14 14.43 7.41 15.51 8.49C16.59 9.57 17.86 10.43 19.32 11.07C20.78 11.69 22.34 12 24 12C22.34 12 20.78 12.32 19.32 12.96C17.86 13.58 16.59 14.43 15.51 15.51C14.43 16.59 13.57 17.86 12.93 19.32C12.31 20.78 12 22.34 12 24Z" /></g><defs><clipPath id="clip0_3603_969"><path d="M0 0H24V24H0z" /></clipPath></defs>
		</svg>
	);
};

LogoGoogleGemini.iconName = "logo-google-gemini";

export default LogoGoogleGemini;