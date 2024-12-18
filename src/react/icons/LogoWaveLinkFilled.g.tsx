import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoWaveLinkFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.25 6C13.6642 6 14 6.33579 14 6.75V17.25C14 17.6642 13.6642 18 13.25 18C12.8358 18 12.5 17.6642 12.5 17.25V6.75C12.5 6.33579 12.8358 6 13.25 6ZM5.75 10C6.16421 10 6.5 10.3358 6.5 10.75V13.25C6.5 13.6642 6.16421 14 5.75 14C5.33579 14 5 13.6642 5 13.25V10.75C5 10.3358 5.33579 10 5.75 10ZM15.75 16C15.3358 16 15 15.6642 15 15.25V8.75C15 8.33579 15.3358 8 15.75 8C16.1642 8 16.5 8.33579 16.5 8.75V15.25C16.5 15.6642 16.1642 16 15.75 16ZM10.75 10C11.1642 10 11.5 10.3358 11.5 10.75V13.25C11.5 13.6642 11.1642 14 10.75 14C10.3358 14 10 13.6642 10 13.25V10.75C10 10.3358 10.3358 10 10.75 10ZM8.25 8C8.66421 8 9 8.33579 9 8.75V15.25C9 15.6642 8.66421 16 8.25 16C7.83579 16 7.5 15.6642 7.5 15.25V8.75C7.5 8.33579 7.83579 8 8.25 8ZM18.25 14C17.8358 14 17.5 13.6642 17.5 13.25V10.75C17.5 10.3358 17.8358 10 18.25 10C18.6642 10 19 10.3358 19 10.75V13.25C19 13.6642 18.6642 14 18.25 14Z" clipRule="evenodd" />
		</svg>
	);
};

LogoWaveLinkFilled.iconName = "logo-wave-link--filled";

export default LogoWaveLinkFilled;