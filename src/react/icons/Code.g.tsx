import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Code = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.9352 3.94412C15.0424 3.54402 14.8049 3.13277 14.4048 3.02556C14.0047 2.91835 13.5935 3.15579 13.4863 3.55589L9.06511 20.0559C8.9579 20.456 9.19534 20.8672 9.59544 20.9744C9.99554 21.0817 10.4068 20.8442 10.514 20.4441L14.9352 3.94412Z" /><path d="M7.78033 6.21967C8.07322 6.51257 8.07322 6.98744 7.78033 7.28033L3.06066 12L7.78033 16.7197C8.07322 17.0126 8.07322 17.4874 7.78033 17.7803C7.48744 18.0732 7.01256 18.0732 6.71967 17.7803L1.46967 12.5303C1.17678 12.2374 1.17678 11.7626 1.46967 11.4697L6.71967 6.21967C7.01256 5.92678 7.48744 5.92678 7.78033 6.21967Z" /><path d="M16.2197 6.21967C15.9268 6.51257 15.9268 6.98744 16.2197 7.28033L20.9393 12L16.2197 16.7197C15.9268 17.0126 15.9268 17.4874 16.2197 17.7803C16.5126 18.0732 16.9874 18.0732 17.2803 17.7803L22.5303 12.5303C22.8232 12.2374 22.8232 11.7626 22.5303 11.4697L17.2803 6.21967C16.9874 5.92678 16.5126 5.92678 16.2197 6.21967Z" />
		</svg>
	);
};

Code.iconName = "code";

export default Code;