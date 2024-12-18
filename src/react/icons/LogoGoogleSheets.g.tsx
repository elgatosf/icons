import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleSheets = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7.00049 17.9999H17.0005V10.9999H7.00049V17.9999ZM15.5005 13.75V12.4999H12.75V13.75H15.5005ZM15.5005 15.25H12.75V16.4999H15.5005V15.25ZM11.25 13.75V12.4999H8.50049V13.75H11.25ZM8.50049 15.25H11.25V16.4999H8.50049V15.25Z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.00098 1.99988H14.001L20.001 7.99988V19.9999C20.001 21.0999 19.101 21.9999 18.001 21.9999H5.99098C4.89098 21.9999 4.00098 21.0999 4.00098 19.9999L4.01098 3.99988C4.01098 2.89988 4.90098 1.99988 6.00098 1.99988ZM6.00098 3.99988V19.9999H18.001V8.99988H13.001V3.99988H6.00098Z" clipRule="evenodd" />
		</svg>
	);
};

LogoGoogleSheets.iconName = "logo-google-sheets";

export default LogoGoogleSheets;