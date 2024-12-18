import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Logo4kcuFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.73535 9.10352V13.1533H7.26367L8.73535 9.10352Z" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.1855 14.1846H11.0127V13.1426H10.1855V8.04541H8.01025L6.10889 12.9224V14.1846H8.66016V16H10.1855V14.1846ZM15.6426 16H17.5493L15.3579 11.5796L17.415 8.04541H15.5352L13.709 11.6655L15.6426 16ZM12.001 16H13.666V8.04541H12.001V16Z" clipRule="evenodd" />
		</svg>
	);
};

Logo4kcuFilled.iconName = "logo4kcu--filled";

export default Logo4kcuFilled;