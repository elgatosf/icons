import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MicrophoneFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 2C9.79086 2 8 3.79086 8 6V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V6C16 3.79086 14.2091 2 12 2Z" clipRule="evenodd" /><path d="M18.25 11.25C18.6642 11.25 19 11.5858 19 12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.815 18.0845 14.3307 18.7894 12.75 18.9597V20.5H15.25C15.6642 20.5 16 20.8358 16 21.25C16 21.6642 15.6642 22 15.25 22H8.75C8.33579 22 8 21.6642 8 21.25C8 20.8358 8.33579 20.5 8.75 20.5H11.25V18.9597C9.66926 18.7894 8.18501 18.0845 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12C5 11.5858 5.33579 11.25 5.75 11.25C6.16421 11.25 6.5 11.5858 6.5 12C6.5 13.4587 7.07946 14.8576 8.11091 15.8891C9.14236 16.9205 10.5413 17.5 12 17.5C13.4587 17.5 14.8576 16.9205 15.8891 15.8891C16.9205 14.8576 17.5 13.4587 17.5 12C17.5 11.5858 17.8358 11.25 18.25 11.25Z" />
		</svg>
	);
};

MicrophoneFilled.iconName = "microphone--filled";

export default MicrophoneFilled;