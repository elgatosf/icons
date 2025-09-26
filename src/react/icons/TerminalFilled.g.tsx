import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTerminalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-6.25 11.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM8.28 8.22a.75.75 0 1 0-1.06 1.06L9.94 12l-2.72 2.72-.052.056a.75.75 0 0 0 1.056 1.056l.056-.052 3.25-3.25a.75.75 0 0 0 0-1.06z"
						clipRule="evenodd"
					/>
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
					<path
						fillRule="evenodd"
						d="M15 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6.775 7.082a.5.5 0 0 0-.693.693l.064.079L8.293 10l-2.147 2.146a.5.5 0 1 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5zM10.5 12a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconTerminalFilled.iconName = "terminal--filled";

export default IconTerminalFilled;
