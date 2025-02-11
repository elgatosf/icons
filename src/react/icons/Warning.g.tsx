import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWarning = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 1 1-1.5 0v-4.5A.75.75 0 0 1 12 8M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M13.732 3.947c-.77-1.333-2.694-1.333-3.464 0L2.732 17c-.77 1.333.192 3 1.732 3h15.072c1.54 0 2.502-1.667 1.732-3zm6.237 13.803L12.433 4.697a.5.5 0 0 0-.866 0L4.03 17.75a.5.5 0 0 0 .433.75h15.072a.5.5 0 0 0 .433-.75"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M8 5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V5.5A.5.5 0 0 1 8 5M8 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
					<path
						fillRule="evenodd"
						d="M8.866 1.5a1 1 0 0 0-1.732 0l-6.35 11a1 1 0 0 0 .865 1.5h12.702a1 1 0 0 0 .866-1.5zM1.649 13 8 2l6.35 11z"
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
					<path d="M10 6a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V6.5A.5.5 0 0 1 10 6M10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M11.732 3.5c-.77-1.333-2.694-1.333-3.464 0L2.206 14c-.77 1.333.192 3 1.732 3h12.124c1.54 0 2.502-1.667 1.732-3zm5.196 11L10.866 4a1 1 0 0 0-1.732 0L3.072 14.5a1 1 0 0 0 .866 1.5h12.124a1 1 0 0 0 .866-1.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconWarning.iconName = "warning";

export default IconWarning;
