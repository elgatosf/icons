import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoFacebookColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#0866FF" d="M22 12C22 6.4772 17.5228 2 12 2C6.4772 2 2 6.4772 2 12C2 16.6896 5.2288 20.6248 9.5844 21.7056V15.056H7.5224V12H9.5844V10.6832C9.5844 7.2796 11.1248 5.702 14.4664 5.702C15.1 5.702 16.1932 5.8264 16.6404 5.9504V8.7204C16.4044 8.6956 15.9944 8.6832 15.4852 8.6832C13.8456 8.6832 13.212 9.3044 13.212 10.9192V12H16.4784L15.9172 15.056H13.212V21.9268C18.1636 21.3288 22.0004 17.1128 22.0004 12H22Z" /><path fill="white" d="M15.9168 15.056L16.478 12H13.2116V10.9192C13.2116 9.30443 13.8452 8.68323 15.4848 8.68323C15.994 8.68323 16.404 8.69563 16.64 8.72043V5.95043C16.1928 5.82603 15.0996 5.70203 14.466 5.70203C11.1244 5.70203 9.58397 7.27963 9.58397 10.6832V12H7.52197V15.056H9.58397V21.7056C10.3576 21.8976 11.1668 22 11.9996 22C12.4096 22 12.814 21.9748 13.2112 21.9268V15.056H15.9164H15.9168Z" />
		</svg>
	);
};

LogoFacebookColor.iconName = "logo-facebook--color";

export default LogoFacebookColor;