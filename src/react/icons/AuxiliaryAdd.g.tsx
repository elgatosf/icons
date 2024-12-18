import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AuxiliaryAdd = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.5 12C3.5 16.6041 7.16054 20.3532 11.73 20.4958C12.0111 21.0361 12.3658 21.5319 12.7809 21.97C12.5232 21.9899 12.2628 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.2628 21.9899 12.5232 21.97 12.7809C21.5319 12.3658 21.0361 12.0111 20.4958 11.73C20.3532 7.16054 16.6041 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12Z" /><path d="M11.0268 16.9054C11.3094 13.79 13.79 11.3094 16.9054 11.0268C16.4525 8.73124 14.4284 7 12 7C9.23858 7 7 9.23858 7 12C7 14.4284 8.73124 16.4525 11.0268 16.9054Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

AuxiliaryAdd.iconName = "auxiliary-add";

export default AuxiliaryAdd;