import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChapterCheckFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14 3.75C14 3.33579 14.3358 3 14.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H14.75C14.3358 4.5 14 4.16421 14 3.75Z" /><path d="M14 9.25C14 8.83579 14.3358 8.5 14.75 8.5H20.25C20.6642 8.5 21 8.83579 21 9.25C21 9.66421 20.6642 10 20.25 10H14.75C14.3358 10 14 9.66421 14 9.25Z" /><path d="M3 14.75C3 14.3358 3.33579 14 3.75 14H12.0218C11.7253 14.4632 11.4858 14.9665 11.3135 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75Z" /><path d="M11.8448 20.7069C11.6293 20.3276 11.4509 19.9246 11.3144 19.5027C11.2932 19.5009 11.2717 19.5 11.25 19.5H3.75C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.4923 21 11.7077 20.8851 11.8448 20.7069Z" /><path d="M3 5C3 3.89543 3.89543 3 5 3H8C9.10457 3 10 3.89543 10 5V8C10 9.10457 9.10457 10 8 10H5C3.89543 10 3 9.10457 3 8V5Z" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.3536 16.3536C20.5488 16.1583 20.5488 15.8417 20.3536 15.6464C20.1583 15.4512 19.8417 15.4512 19.6464 15.6464L16.5 18.7929L14.8536 17.1464C14.6583 16.9512 14.3417 16.9512 14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20C16.6326 20 16.7598 19.9473 16.8536 19.8536L20.3536 16.3536Z" clipRule="evenodd" />
		</svg>
	);
};

ChapterCheckFilled.iconName = "chapter-check--filled";

export default ChapterCheckFilled;