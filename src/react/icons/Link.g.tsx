import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.498 12c0-3.037 2.464-5.5 5.502-5.5h.25a.75.75 0 0 0 0-1.5H9a7 7 0 0 0-7.002 7c0 3.866 3.136 7 7.002 7h.25a.75.75 0 0 0 0-1.5H9A5.5 5.5 0 0 1 3.498 12M14.75 5a.75.75 0 0 0 0 1.5H15a5.5 5.5 0 0 1 5.502 5.5c0 3.037-2.464 5.5-5.502 5.5h-.25a.75.75 0 0 0 0 1.5H15a7 7 0 0 0 7.002-7c0-3.866-3.136-7-7.002-7z" />
					<path d="M8.75 11.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" />
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
					<path d="M2 10a5 5 0 0 1 5-5h.5a.5.5 0 0 1 0 1H7a4 4 0 1 0 0 8h.5a.5.5 0 0 1 0 1H7a5 5 0 0 1-5-5M18 10a5 5 0 0 0-5-5h-.5a.5.5 0 0 0 0 1h.5a4 4 0 0 1 0 8h-.5a.5.5 0 0 0 0 1h.5a5 5 0 0 0 5-5" />
					<path d="M7.5 9.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
				</svg>
			);
	}
};

IconLink.iconName = "link";

export default IconLink;
