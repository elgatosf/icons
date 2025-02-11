import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUpload = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.78 9.53a.75.75 0 0 1-1.06 0l-3.97-3.97V17a.75.75 0 0 1-1.5 0V5.56L7.28 9.53a.75.75 0 0 1-1.06-1.06l5.25-5.25a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06M3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z" />
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
					<path d="M10.5 13.5a.5.5 0 0 1-1 0V4.207L5.854 7.854a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708L10.5 4.207zM3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z" />
				</svg>
			);
	}
};

IconUpload.iconName = "upload";

export default IconUpload;
