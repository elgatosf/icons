import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbDown = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M16.5 13L14.5055 19.3824C14.2048 20.3447 13.3135 21 12.3052 21C11.0321 21 10 19.9679 10 18.6948L10 15L4.6185 15C3.29975 15 2.34199 13.746 2.68897 12.4738L4.19613 6.94753C4.67074 5.20728 6.25138 4 8.05518 4L19 4C20.1046 4 21 4.89543 21 6L21 11C21 12.1046 20.1046 13 19 13L16.5 13ZM11.5 13.5L4.6185 13.5C4.28881 13.5 4.04937 13.1865 4.13612 12.8684L5.64328 7.34221C5.93991 6.25455 6.92781 5.5 8.05518 5.5L15 5.5L15 12.7711L13.0738 18.935C12.9687 19.2711 12.6574 19.5 12.3052 19.5C11.8605 19.5 11.5 19.1395 11.5 18.6948L11.5 13.5ZM16.5 11.5L19 11.5C19.2761 11.5 19.5 11.2761 19.5 11L19.5 6C19.5 5.72386 19.2761 5.5 19 5.5L16.5 5.5L16.5 11.5Z"
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
						d="M10.8848 16.0752C10.2541 17.5885 8 17.1376 8 15.4981L8 12.9981L4.60644 12.9981C3.29139 12.9981 2.33445 11.7507 2.6748 10.4805L3.61719 6.96292C4.05651 5.3234 5.47685 4.15163 7.14453 4.01175L7.48047 3.99808L15 3.99808C16.1046 3.99808 17 4.89352 17 5.99808L17 8.99808C17 10.1026 16.1046 10.9981 15 10.9981L13 10.9981L10.8848 16.0752ZM15 9.99808C15.5523 9.99808 16 9.55036 16 8.99808L16 5.99808C16 5.44581 15.5523 4.99808 15 4.99808L13 4.99808L13 9.99808L15 9.99808ZM9 15.4981C9 16.0446 9.75171 16.195 9.96191 15.6905L12 10.7989L12 4.99808L7.48047 4.99808C6.12282 4.99825 4.93441 5.9103 4.58301 7.22171L3.64062 10.7393C3.47045 11.3744 3.94892 11.9981 4.60644 11.9981L9 11.9981L9 15.4981Z"
					/>
				</svg>
			);
	}
};

IconThumbDown.iconName = "thumb-down";

export default IconThumbDown;
