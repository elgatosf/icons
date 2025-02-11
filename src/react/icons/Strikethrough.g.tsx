import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStrikethrough = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M12 21c-4.966-.003-6.395-3.83-6.455-4a.75.75 0 1 1 1.41-.51c.04.12 1.16 3 5.04 3 2.57 0 4.5-1.4 4.5-3.25 0-1.397-.605-2.19-1.692-2.74H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5h-3.104c.526.682.849 1.57.849 2.75 0 2.709-2.578 4.748-5.996 4.75M12 21h-.005.01zM6.877 10.5H9.72C8.307 10.04 7.495 9.411 7.495 8c0-2.03 1.89-3.5 4.5-3.5 3.794 0 4.484 2.767 4.52 2.908v.002c.09.4.49.65.89.57.41-.09.67-.48.58-.89-.3-1.41-1.94-4.09-5.98-4.09-3.48 0-6 2.1-6.01 4.99 0 1.099.336 1.904.882 2.51" />
				</svg>
			);
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
