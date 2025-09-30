import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconInfoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7ZM11.25 17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V10.25C12.75 9.83579 12.4142 9.5 12 9.5C11.5858 9.5 11.25 9.83579 11.25 10.25V17.25Z"
					/>
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8.75 4.75C8.75 5.16422 8.41418 5.5 8 5.5C7.58582 5.5 7.25 5.16422 7.25 4.75C7.25 4.33578 7.58582 4 8 4C8.41418 4 8.75 4.33578 8.75 4.75ZM8 6.5C8.27612 6.5 8.5 6.72386 8.5 7V11.5017C8.5 11.7778 8.27612 12.0017 8 12.0017C7.72388 12.0017 7.5 11.7778 7.5 11.5017V7C7.5 6.72386 7.72388 6.5 8 6.5Z"
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
						d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44771 7 9 6.55228 9 6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6ZM10.5 9C10.5 8.72386 10.2761 8.5 10 8.5C9.72386 8.5 9.5 8.72386 9.5 9V14.5C9.5 14.7761 9.72386 15 10 15C10.2761 15 10.5 14.7761 10.5 14.5V9Z"
					/>
				</svg>
			);
	}
};

IconInfoFilled.iconName = "info--filled";

export default IconInfoFilled;
