import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoWaveLink = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M5.75 10C6.16421 10 6.5 10.3358 6.5 10.75V13.25C6.5 13.6642 6.16421 14 5.75 14C5.33579 14 5 13.6642 5 13.25V10.75C5 10.3358 5.33579 10 5.75 10Z" /><path d="M14 6.75C14 6.33579 13.6642 6 13.25 6C12.8358 6 12.5 6.33579 12.5 6.75V17.25C12.5 17.6642 12.8358 18 13.25 18C13.6642 18 14 17.6642 14 17.25V6.75Z" /><path d="M15 15.25C15 15.6642 15.3358 16 15.75 16C16.1642 16 16.5 15.6642 16.5 15.25V8.75C16.5 8.33579 16.1642 8 15.75 8C15.3358 8 15 8.33579 15 8.75V15.25Z" /><path d="M11.5 10.75C11.5 10.3358 11.1642 10 10.75 10C10.3358 10 10 10.3358 10 10.75V13.25C10 13.6642 10.3358 14 10.75 14C11.1642 14 11.5 13.6642 11.5 13.25V10.75Z" /><path d="M9 8.75C9 8.33579 8.66421 8 8.25 8C7.83579 8 7.5 8.33579 7.5 8.75V15.25C7.5 15.6642 7.83579 16 8.25 16C8.66421 16 9 15.6642 9 15.25V8.75Z" /><path d="M17.5 13.25C17.5 13.6642 17.8358 14 18.25 14C18.6642 14 19 13.6642 19 13.25V10.75C19 10.3358 18.6642 10 18.25 10C17.8358 10 17.5 10.3358 17.5 10.75V13.25Z" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z" clipRule="evenodd" />
		</svg>
	);
};

LogoWaveLink.iconName = "logo-wave-link";

export default LogoWaveLink;