import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LensFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.426 10.6142C11.608 10.5388 11.803 10.5 12 10.5C12.4142 10.5 12.75 10.1642 12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.606 9 11.2159 9.0776 10.8519 9.22836C10.488 9.37913 10.1573 9.6001 9.87868 9.87868C9.6001 10.1573 9.37913 10.488 9.22836 10.8519C9.0776 11.2159 9 11.606 9 12C9 12.4142 9.33579 12.75 9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.803 10.5388 11.608 10.6142 11.426C10.6896 11.244 10.8001 11.0786 10.9393 10.9393C11.0786 10.8001 11.244 10.6896 11.426 10.6142Z" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z" clipRule="evenodd" />
		</svg>
	);
};

LensFilled.iconName = "lens--filled";

export default LensFilled;