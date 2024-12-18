import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DisplayProjectSetFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9 3C7.89543 3 7 3.89543 7 5V6.5H15C16.933 6.5 18.5 8.067 18.5 10V11.0764C19.6077 11.2475 20.6231 11.6982 21.4718 12.3542C21.7997 11.998 22 11.5224 22 11V5C22 3.89543 21.1046 3 20 3H9Z" /><path d="M17 10V11.0189C13.6438 11.2743 11 14.0784 11 17.5C11 17.6682 11.0064 17.835 11.0189 18H4C2.89543 18 2 17.1046 2 16V10C2 8.89543 2.89543 8 4 8H15C16.1046 8 17 8.89543 17 10Z" /><path d="M11.25 19.5C11.2717 19.5 11.2932 19.5009 11.3144 19.5027C11.4509 19.9246 11.6293 20.3276 11.8448 20.7069C11.7077 20.8851 11.4923 21 11.25 21H7.75C7.33579 21 7 20.6642 7 20.25C7 19.8358 7.33579 19.5 7.75 19.5H11.25Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM20 15.5C20 15.2239 19.7762 15 19.5 15H16.6716C16.3955 15 16.1716 15.2239 16.1716 15.5C16.1716 15.7761 16.3955 16 16.6716 16H18.2929L15.1463 19.1466C14.9511 19.3419 14.9511 19.6584 15.1463 19.8537C15.3416 20.049 15.6582 20.049 15.8534 19.8537L19 16.7071V18.3284C19 18.6046 19.2239 18.8284 19.5 18.8284C19.7762 18.8284 20 18.6046 20 18.3284V15.5Z" clipRule="evenodd" />
		</svg>
	);
};

DisplayProjectSetFilled.iconName = "display-project-set--filled";

export default DisplayProjectSetFilled;