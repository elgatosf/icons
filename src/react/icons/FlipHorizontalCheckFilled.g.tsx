import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FlipHorizontalCheckFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.25 3.75C11.25 3.33579 11.5858 3 12 3C12.4142 3 12.75 3.33579 12.75 3.75V12.25C12.75 12.6642 12.4142 13 12 13C11.5858 13 11.25 12.6642 11.25 12.25V3.75Z" /><path d="M3 17.25C3 17.5533 3.18273 17.8268 3.46299 17.9429C3.74324 18.059 4.06583 17.9948 4.28033 17.7803L9.53033 12.5303C9.82322 12.2374 9.82322 11.7626 9.53033 11.4697L4.28033 6.21967C4.06583 6.00517 3.74324 5.941 3.46299 6.05709C3.18273 6.17318 3 6.44665 3 6.75V17.25Z" /><path d="M21 6.75V12.0218C19.9897 11.375 18.7886 11 17.5 11C16.3213 11 15.2159 11.3137 14.2627 11.8623C14.2894 11.7184 14.3584 11.5809 14.4697 11.4697L19.7197 6.21967C19.9342 6.00517 20.2568 5.941 20.537 6.05709C20.8173 6.17318 21 6.44665 21 6.75Z" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.3536 16.3536C20.5488 16.1583 20.5488 15.8417 20.3536 15.6464C20.1583 15.4512 19.8417 15.4512 19.6464 15.6464L16.5 18.7929L14.8536 17.1464C14.6583 16.9512 14.3417 16.9512 14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20C16.6326 20 16.7598 19.9473 16.8536 19.8536L20.3536 16.3536Z" clipRule="evenodd" />
		</svg>
	);
};

FlipHorizontalCheckFilled.iconName = "flip-horizontal-check--filled";

export default FlipHorizontalCheckFilled;