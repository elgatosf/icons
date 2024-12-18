import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HelpFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.6607 7.5C10.7094 7.5 9.87084 8.12395 9.59751 9.03506L9.46837 9.46551C9.34935 9.86226 8.93123 10.0874 8.53449 9.96837C8.13774 9.84935 7.91261 9.43123 8.03163 9.03449L8.16077 8.60404C8.62444 7.05845 10.047 6 11.6607 6H12.0559C13.2044 6 14.2821 6.55464 14.9497 7.48919C16.1058 9.10773 15.7096 11.3598 14.0706 12.4866L13.2461 13.0535C12.9355 13.267 12.75 13.6197 12.75 13.9965V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V13.9965C11.25 13.1257 11.6787 12.3107 12.3963 11.8174L13.2208 11.2506C14.1685 10.599 14.3975 9.29689 13.7291 8.36105C13.3431 7.82069 12.7199 7.5 12.0559 7.5H11.6607ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" clipRule="evenodd" />
		</svg>
	);
};

HelpFilled.iconName = "help--filled";

export default HelpFilled;