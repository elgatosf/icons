import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipHorizontalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.75 3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V3.75Z" />
			<path d="M3 17.25C3 17.5533 3.18273 17.8268 3.46299 17.9429C3.74324 18.059 4.06583 17.9948 4.28033 17.7803L9.53033 12.5303C9.82322 12.2374 9.82322 11.7626 9.53033 11.4697L4.28033 6.21966C4.06583 6.00516 3.74324 5.941 3.46299 6.05708C3.18273 6.17317 3 6.44664 3 6.74999V17.25Z" />
			<path d="M21 17.25C21 17.5533 20.8173 17.8268 20.537 17.9429C20.2568 18.059 19.9342 17.9948 19.7197 17.7803L14.4697 12.5303C14.1768 12.2374 14.1768 11.7626 14.4697 11.4697L19.7197 6.21966C19.9342 6.00516 20.2568 5.941 20.537 6.05708C20.8173 6.17317 21 6.44664 21 6.74999V17.25Z" />
		</svg>
	);
};

IconFlipHorizontalFilled.iconName = "flip-horizontal--filled";

export default IconFlipHorizontalFilled;
