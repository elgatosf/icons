import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMoveToCenter = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M8.28033 3.21967C7.98744 2.92678 7.51256 2.92678 7.21967 3.21967C6.92678 3.51256 6.92678 3.98744 7.21967 4.28033L11.4697 8.53033C11.7626 8.82322 12.2374 8.82322 12.5303 8.53033L16.7803 4.28033C17.0732 3.98744 17.0732 3.51256 16.7803 3.21967C16.4874 2.92678 16.0126 2.92678 15.7197 3.21967L12 6.93934L8.28033 3.21967Z" />
			<path d="M20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25L3.75 11.25C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75L20.25 12.75Z" />
			<path d="M7.21967 20.7803C7.51256 21.0732 7.98744 21.0732 8.28033 20.7803L12 17.0607L15.7197 20.7803C16.0126 21.0732 16.4874 21.0732 16.7803 20.7803C17.0732 20.4874 17.0732 20.0126 16.7803 19.7197L12.5303 15.4697C12.2374 15.1768 11.7626 15.1768 11.4697 15.4697L7.21967 19.7197C6.92678 20.0126 6.92678 20.4874 7.21967 20.7803Z" />
		</svg>
	);
};

IconMoveToCenter.iconName = "move-to-center";

export default IconMoveToCenter;
