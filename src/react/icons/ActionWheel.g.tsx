import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ActionWheel = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<g clipPath="url(#prefix__clip0_5312_318)"><path fillRule="evenodd" d="M6 8.25C6 7.00732 7.00732 6 8.25 6H15.75C16.9927 6 18 7.00732 18 8.25V15.75C18 16.9927 16.9927 18 15.75 18H8.25C7.00732 18 6 16.9927 6 15.75V8.25ZM9.75 13.5002C9.33582 13.5002 9 13.8361 9 14.2502C9 14.6644 9.33582 15.0002 9.75 15.0002H14.25C14.6642 15.0002 15 14.6644 15 14.2502C15 13.8361 14.6642 13.5002 14.25 13.5002H9.75Z" clipRule="evenodd" /><path d="M3.75 7.5C4.16421 7.5 4.5 7.83579 4.5 8.25L4.5 15.75C4.5 16.1642 4.16421 16.5 3.75 16.5H3H2.25C1.00736 16.5 0 15.4926 0 14.25V9.75C0 8.50736 1.00736 7.5 2.25 7.5H3H3.75Z" /><path d="M20.25 16.5C19.8358 16.5 19.5 16.1642 19.5 15.75V8.25C19.5 7.83579 19.8358 7.5 20.25 7.5L21 7.5H21.75C22.9926 7.5 24 8.50736 24 9.75V14.25C24 15.4926 22.9926 16.5 21.75 16.5H21H20.25Z" /></g><defs><clipPath id="clip0_5312_318"><path d="M0 0H24V24H0z" /></clipPath></defs>
		</svg>
	);
};

ActionWheel.iconName = "action-wheel";

export default ActionWheel;