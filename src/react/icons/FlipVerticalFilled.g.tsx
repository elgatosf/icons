import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FlipVerticalFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25L3.75 11.25C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75L20.25 12.75Z" /><path d="M6.75001 3C6.44666 3 6.17318 3.18273 6.0571 3.46299C5.94101 3.74324 6.00518 4.06583 6.21968 4.28033L11.4697 9.53033C11.7626 9.82322 12.2374 9.82322 12.5303 9.53033L17.7803 4.28033C17.9948 4.06583 18.059 3.74324 17.9429 3.46299C17.8268 3.18273 17.5534 3 17.25 3L6.75001 3Z" /><path d="M6.75001 21C6.44666 21 6.17318 20.8173 6.0571 20.537C5.94101 20.2568 6.00518 19.9342 6.21968 19.7197L11.4697 14.4697C11.7626 14.1768 12.2374 14.1768 12.5303 14.4697L17.7803 19.7197C17.9948 19.9342 18.059 20.2568 17.9429 20.537C17.8268 20.8173 17.5534 21 17.25 21L6.75001 21Z" />
		</svg>
	);
};

FlipVerticalFilled.iconName = "flip-vertical--filled";

export default FlipVerticalFilled;