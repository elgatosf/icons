import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDownload = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 3a.75.75 0 0 1 .75.75v11.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 1 1 1.06-1.06l3.97 3.97V3.75A.75.75 0 0 1 12 3M3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z" />
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
					<path d="M8.5 2.5a.5.5 0 0 0-1 0v7.293L4.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.793zM2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" />
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
					<path d="M10.5 3.5a.5.5 0 0 0-1 0v9.293L5.854 9.146a.5.5 0 1 0-.708.708l4.5 4.5a.5.5 0 0 0 .708 0l4.5-4.5a.5.5 0 0 0-.708-.708L10.5 12.793zM3.5 17a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1z" />
				</svg>
			);
	}
};

IconDownload.iconName = "download";

export default IconDownload;
