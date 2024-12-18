import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleForms = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16 18H11V16.5H16V18Z" /><path d="M11 15.25H16V13.75H11V15.25Z" /><path d="M16 12.5H11V11H16V12.5Z" /><path d="M9 12.75C9.55229 12.75 10 12.3023 10 11.75C10 11.1977 9.55229 10.75 9 10.75C8.44771 10.75 8 11.1977 8 11.75C8 12.3023 8.44771 12.75 9 12.75Z" /><path d="M10 14.5C10 15.0523 9.55229 15.5 9 15.5C8.44771 15.5 8 15.0523 8 14.5C8 13.9477 8.44771 13.5 9 13.5C9.55229 13.5 10 13.9477 10 14.5Z" /><path d="M9 18.25C9.55229 18.25 10 17.8023 10 17.25C10 16.6977 9.55229 16.25 9 16.25C8.44771 16.25 8 16.6977 8 17.25C8 17.8023 8.44771 18.25 9 18.25Z" /><path fillRule="evenodd" d="M14.001 1.99988H6.00098C4.90098 1.99988 4.01098 2.89988 4.01098 3.99988L4.00098 19.9999C4.00098 21.0999 4.89098 21.9999 5.99098 21.9999H18.001C19.101 21.9999 20.001 21.0999 20.001 19.9999V7.99988L14.001 1.99988ZM6.00098 19.9999V3.99988H13.001V8.99988H18.001V19.9999H6.00098Z" clipRule="evenodd" />
		</svg>
	);
};

LogoGoogleForms.iconName = "logo-google-forms";

export default LogoGoogleForms;