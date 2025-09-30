import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSpeakerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5C11 8.05228 11.4477 8.5 12 8.5Z" />
					<path d="M14.5 15C14.5 16.3807 13.3807 17.5 12 17.5C10.6193 17.5 9.5 16.3807 9.5 15C9.5 13.6193 10.6193 12.5 12 12.5C13.3807 12.5 14.5 13.6193 14.5 15Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM12 10C13.3807 10 14.5 8.88071 14.5 7.5C14.5 6.11929 13.3807 5 12 5C10.6193 5 9.5 6.11929 9.5 7.5C9.5 8.88071 10.6193 10 12 10ZM16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15Z"
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
					<path d="M10 15C11.3807 15 12.5 13.8807 12.5 12.5C12.5 11.1193 11.3807 10 10 10C8.61929 10 7.5 11.1193 7.5 12.5C7.5 13.8807 8.61929 15 10 15Z" />
					<path d="M11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM10 16C11.933 16 13.5 14.433 13.5 12.5C13.5 10.567 11.933 9 10 9C8.067 9 6.5 10.567 6.5 12.5C6.5 14.433 8.067 16 10 16ZM12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6Z"
					/>
				</svg>
			);
	}
};

IconSpeakerFilled.iconName = "speaker--filled";

export default IconSpeakerFilled;
