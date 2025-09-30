import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSpeaker = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 10C13.3807 10 14.5 8.88071 14.5 7.5C14.5 6.11929 13.3807 5 12 5C10.6193 5 9.5 6.11929 9.5 7.5C9.5 8.88071 10.6193 10 12 10ZM12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5C11 8.05228 11.4477 8.5 12 8.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15ZM14.5 15C14.5 16.3807 13.3807 17.5 12 17.5C10.6193 17.5 9.5 16.3807 9.5 15C9.5 13.6193 10.6193 12.5 12 12.5C13.3807 12.5 14.5 13.6193 14.5 15Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6ZM18 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V4C18.5 3.72386 18.2761 3.5 18 3.5Z"
					/>
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10 16C11.933 16 13.5 14.433 13.5 12.5C13.5 10.567 11.933 9 10 9C8.067 9 6.5 10.567 6.5 12.5C6.5 14.433 8.067 16 10 16ZM10 15C11.3807 15 12.5 13.8807 12.5 12.5C12.5 11.1193 11.3807 10 10 10C8.61929 10 7.5 11.1193 7.5 12.5C7.5 13.8807 8.61929 15 10 15Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2H6ZM14 3H6C5.44772 3 5 3.44772 5 4V16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16V4C15 3.44772 14.5523 3 14 3Z"
					/>
				</svg>
			);
	}
};

IconSpeaker.iconName = "speaker";

export default IconSpeaker;
