import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M12.75 4.75C12.75 4.33579 12.4142 4 12 4C11.5858 4 11.25 4.33579 11.25 4.75V11.25H4.75C4.33579 11.25 4 11.5858 4 12C4 12.4142 4.33579 12.75 4.75 12.75H11.25V19.25C11.25 19.6642 11.5858 20 12 20C12.4142 20 12.75 19.6642 12.75 19.25V12.75H19.25C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25H12.75V4.75Z" />
				</svg>
			);
		case "s":
			return (
				<svg
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M7.99512 2.5C8.27126 2.5 8.49512 2.72386 8.49512 3V7.50488H13C13.2761 7.50488 13.4999 7.7288 13.5 8.00488C13.5 8.28103 13.2761 8.50488 13 8.50488H8.49512V13C8.49512 13.2761 8.27126 13.5 7.99512 13.5C7.71897 13.5 7.49512 13.2761 7.49512 13V8.50488H3C2.72391 8.50482 2.5 8.28098 2.5 8.00488C2.50007 7.72884 2.72395 7.50495 3 7.50488H7.49512V3C7.49512 2.72386 7.71897 2.5 7.99512 2.5Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M10.5 4C10.5 3.72386 10.2761 3.5 10 3.5C9.72386 3.5 9.5 3.72386 9.5 4V9.5L4 9.5C3.72386 9.5 3.5 9.72386 3.5 10C3.5 10.2761 3.72386 10.5 4 10.5L9.5 10.5V16C9.5 16.2761 9.72386 16.5 10 16.5C10.2761 16.5 10.5 16.2761 10.5 16V10.5L16 10.5C16.2761 10.5 16.5 10.2761 16.5 10C16.5 9.72386 16.2761 9.5 16 9.5L10.5 9.5V4Z" />
				</svg>
			);
	}
};

IconAdd.iconName = "add";

export default IconAdd;
