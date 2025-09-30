import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDrag = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 5.5C10 6.32843 9.32843 7 8.5 7C7.67157 7 7 6.32843 7 5.5C7 4.67157 7.67157 4 8.5 4C9.32843 4 10 4.67157 10 5.5Z" />
					<path d="M8.5 13.5C9.32843 13.5 10 12.8284 10 12C10 11.1716 9.32843 10.5 8.5 10.5C7.67157 10.5 7 11.1716 7 12C7 12.8284 7.67157 13.5 8.5 13.5Z" />
					<path d="M8.5 20C9.32843 20 10 19.3284 10 18.5C10 17.6716 9.32843 17 8.5 17C7.67157 17 7 17.6716 7 18.5C7 19.3284 7.67157 20 8.5 20Z" />
					<path d="M15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z" />
					<path d="M17 12C17 12.8284 16.3284 13.5 15.5 13.5C14.6716 13.5 14 12.8284 14 12C14 11.1716 14.6716 10.5 15.5 10.5C16.3284 10.5 17 11.1716 17 12Z" />
					<path d="M15.5 7C16.3284 7 17 6.32843 17 5.5C17 4.67157 16.3284 4 15.5 4C14.6716 4 14 4.67157 14 5.5C14 6.32843 14.6716 7 15.5 7Z" />
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
					<path d="M7 6C7.55228 6 8 5.55228 8 5C8 4.44772 7.55228 4 7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6Z" />
					<path d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44771 7.55228 9 7 9C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11Z" />
					<path d="M8 15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15C6 14.4477 6.44772 14 7 14C7.55228 14 8 14.4477 8 15Z" />
					<path d="M13 6C13.5523 6 14 5.55228 14 5C14 4.44772 13.5523 4 13 4C12.4477 4 12 4.44772 12 5C12 5.55228 12.4477 6 13 6Z" />
					<path d="M14 10C14 10.5523 13.5523 11 13 11C12.4477 11 12 10.5523 12 10C12 9.44771 12.4477 9 13 9C13.5523 9 14 9.44771 14 10Z" />
					<path d="M13 16C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16Z" />
				</svg>
			);
	}
};

IconDrag.iconName = "drag";

export default IconDrag;
