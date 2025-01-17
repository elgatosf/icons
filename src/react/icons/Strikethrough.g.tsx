import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStrikethrough = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M10 17c-3.79 0-4.92-2.7-4.96-2.81a.501.501 0 0 1 .93-.37l.001.003c.055.124.966 2.187 4.039 2.187 2.13 0 3.5-1.18 3.5-3 0-1.039-.446-1.608-1.247-2.01H3.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-2.66c.404.491.65 1.132.65 1.99 0 2.36-1.85 4-4.5 4zM5.5 6.5c0 1.191.474 1.963 1.184 2.5H9.14C7.472 8.516 6.49 7.955 6.49 6.49c0-1.23 1.31-2.5 3.5-2.5 2.577 0 3.477 2.047 3.538 2.186l.002.004a.501.501 0 0 0 .93-.37C14.42 5.7 13.3 3 10 3 7.18 3 5.5 4.78 5.5 6.5" />
				</svg>
			);
	}
};

IconStrikethrough.iconName = "strikethrough";

export default IconStrikethrough;
