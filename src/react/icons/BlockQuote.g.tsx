import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const BlockQuote = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21C4.16421 21 4.5 20.6642 4.5 20.25V3.75C4.5 3.33579 4.16421 3 3.75 3Z" /><path d="M20.25 3C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H7.75C7.33579 4.5 7 4.16421 7 3.75C7 3.33579 7.33579 3 7.75 3H20.25Z" /><path d="M17.25 8.5C17.6642 8.5 18 8.83579 18 9.25C18 9.66421 17.6642 10 17.25 10H7.75C7.33578 10 7 9.66421 7 9.25C7 8.83579 7.33578 8.5 7.75 8.5H17.25Z" /><path d="M21 14.75C21 14.3358 20.6642 14 20.25 14H7.75C7.33579 14 7 14.3358 7 14.75C7 15.1642 7.33579 15.5 7.75 15.5H20.25C20.6642 15.5 21 15.1642 21 14.75Z" /><path d="M17.25 19.5C17.6642 19.5 18 19.8358 18 20.25C18 20.6642 17.6642 21 17.25 21H7.75C7.33578 21 7 20.6642 7 20.25C7 19.8358 7.33578 19.5 7.75 19.5H17.25Z" />
		</svg>
	);
};

BlockQuote.iconName = "block-quote";

export default BlockQuote;