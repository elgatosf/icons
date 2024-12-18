import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TextUpToTop = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H3.75C3.33579 4.5 3 4.16421 3 3.75Z" /><path d="M3 9.25C3 8.83579 3.33579 8.5 3.75 8.5H12.25C12.6642 8.5 13 8.83579 13 9.25C13 9.66421 12.6642 10 12.25 10H3.75C3.33579 10 3 9.66421 3 9.25Z" /><path d="M3.75 14C3.33579 14 3 14.3358 3 14.75C3 15.1642 3.33579 15.5 3.75 15.5H11.3135C11.4858 14.9665 11.7253 14.4632 12.0218 14H3.75Z" /><path d="M3.75 19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5Z" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM19.8536 19.1464L17.8536 17.1464C17.6583 16.9512 17.3417 16.9512 17.1464 17.1464L15.1464 19.1464C14.9512 19.3417 14.9512 19.6583 15.1464 19.8536C15.3417 20.0488 15.6583 20.0488 15.8536 19.8536L17.5 18.2071L19.1464 19.8536C19.3417 20.0488 19.6583 20.0488 19.8536 19.8536C20.0488 19.6583 20.0488 19.3417 19.8536 19.1464ZM15 15.5C15 15.2239 15.2239 15 15.5 15H19.5C19.7761 15 20 15.2239 20 15.5C20 15.7761 19.7761 16 19.5 16H15.5C15.2239 16 15 15.7761 15 15.5Z" clipRule="evenodd" />
		</svg>
	);
};

TextUpToTop.iconName = "text-up-to-top";

export default TextUpToTop;