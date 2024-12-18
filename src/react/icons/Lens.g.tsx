import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Lens = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.426 10.6142C11.608 10.5388 11.803 10.5 12 10.5C12.4142 10.5 12.75 10.1642 12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.606 9 11.2159 9.0776 10.8519 9.22836C10.488 9.37913 10.1573 9.6001 9.87868 9.87868C9.6001 10.1573 9.37913 10.488 9.22836 10.8519C9.0776 11.2159 9 11.606 9 12C9 12.4142 9.33579 12.75 9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.803 10.5388 11.608 10.6142 11.426C10.6896 11.244 10.8001 11.0786 10.9393 10.9393C11.0786 10.8001 11.244 10.6896 11.426 10.6142Z" /><path fillRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z" clipRule="evenodd" />
		</svg>
	);
};

Lens.iconName = "lens";

export default Lens;