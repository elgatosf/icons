import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAutoScrollUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.21967 10.7803C7.51256 11.0732 7.98744 11.0732 8.28033 10.7803L12 7.06066L15.7197 10.7803C16.0126 11.0732 16.4874 11.0732 16.7803 10.7803C17.0732 10.4874 17.0732 10.0126 16.7803 9.71967L12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L7.21967 9.71967C6.92678 10.0126 6.92678 10.4874 7.21967 10.7803Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15ZM13.5 15C13.5 15.8284 12.8284 16.5 12 16.5C11.1716 16.5 10.5 15.8284 10.5 15C10.5 14.1716 11.1716 13.5 12 13.5C12.8284 13.5 13.5 14.1716 13.5 15Z"
			/>
		</svg>
	);
};

IconAutoScrollUp.iconName = "auto-scroll-up";

export default IconAutoScrollUp;
