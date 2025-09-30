import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMoreAlt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7Z" />
					<path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" />
					<path d="M13.5 18.5C13.5 19.3284 12.8284 20 12 20C11.1716 20 10.5 19.3284 10.5 18.5C10.5 17.6716 11.1716 17 12 17C12.8284 17 13.5 17.6716 13.5 18.5Z" />
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
					<path d="M11 15C11 14.4477 10.5523 14 10 14C9.44771 14 9 14.4477 9 15C9 15.5523 9.44771 16 10 16C10.5523 16 11 15.5523 11 15Z" />
					<path d="M10 9C10.5523 9 11 9.44771 11 10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10C9 9.44771 9.44771 9 10 9Z" />
					<path d="M10 4C10.5523 4 11 4.44771 11 5C11 5.55229 10.5523 6 10 6C9.44771 6 9 5.55229 9 5C9 4.44771 9.44771 4 10 4Z" />
				</svg>
			);
	}
};

IconMoreAlt.iconName = "more-alt";

export default IconMoreAlt;
