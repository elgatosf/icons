import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TextSet = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H3.75C3.33579 4.5 3 4.16421 3 3.75Z" /><path d="M3 9.25C3 8.83579 3.33579 8.5 3.75 8.5H12.25C12.6642 8.5 13 8.83579 13 9.25C13 9.66421 12.6642 10 12.25 10H3.75C3.33579 10 3 9.66421 3 9.25Z" /><path d="M3 14.75C3 14.3358 3.33579 14 3.75 14H12.0218C11.7253 14.4632 11.4858 14.9665 11.3135 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75Z" /><path d="M3.75 19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM20 15.5C20 15.2239 19.7762 15 19.5 15H16.6716C16.3955 15 16.1716 15.2239 16.1716 15.5C16.1716 15.7761 16.3955 16 16.6716 16H18.2929L15.1463 19.1466C14.9511 19.3419 14.9511 19.6584 15.1463 19.8537C15.3416 20.049 15.6582 20.049 15.8534 19.8537L19 16.7071V18.3284C19 18.6046 19.2239 18.8284 19.5 18.8284C19.7762 18.8284 20 18.6046 20 18.3284V15.5Z" clipRule="evenodd" />
		</svg>
	);
};

TextSet.iconName = "text-set";

export default TextSet;