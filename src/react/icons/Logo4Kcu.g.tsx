import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Logo4kcu = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10.1855 14.1846H11.0127V13.1426H10.1855V8.04541H8.01025L6.10889 12.9224V14.1846H8.66016V16H10.1855V14.1846ZM8.73535 9.10352V13.1533H7.26367L8.73535 9.10352Z" clipRule="evenodd" /><path d="M15.6426 16H17.5493L15.3579 11.5796L17.415 8.04541H15.5352L13.709 11.6655L15.6426 16Z" /><path d="M12.001 16H13.666V8.04541H12.001V16Z" /><path fillRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z" clipRule="evenodd" />
		</svg>
	);
};

Logo4kcu.iconName = "logo-4kcu";

export default Logo4kcu;