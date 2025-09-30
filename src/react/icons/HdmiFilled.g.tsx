import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHdmiFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4.41421 16.9142C4.78929 17.2893 5.29799 17.5 5.82843 17.5H18.1716C18.702 17.5 19.2107 17.2893 19.5858 16.9142L21.4142 15.0858C21.7893 14.7107 22 14.202 22 13.6716V10C22 8.89543 21.1046 8 20 8H4C2.89543 8 2 8.89543 2 10V13.6716C2 14.202 2.21071 14.7107 2.58579 15.0858L4.41421 16.9142ZM6.75 12C6.33579 12 6 12.3358 6 12.75C6 13.1642 6.33579 13.5 6.75 13.5H17.25C17.6642 13.5 18 13.1642 18 12.75C18 12.3358 17.6642 12 17.25 12H6.75Z"
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
						d="M3.06066 10.5607L1.43934 8.93934C1.15803 8.65803 1 8.2765 1 7.87868V5.5C1 4.67157 1.67157 4 2.5 4H13.5C14.3284 4 15 4.67157 15 5.5V7.87868C15 8.2765 14.842 8.65804 14.5607 8.93934L12.9393 10.5607C12.658 10.842 12.2765 11 11.8787 11H4.12132C3.7235 11 3.34196 10.842 3.06066 10.5607ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H11.5C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7H4.5Z"
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
						d="M3.5 6H16.5C17.3284 6 18 6.67157 18 7.5V9.87868C18 10.2765 17.842 10.658 17.5607 10.9393L15.9393 12.5607C15.658 12.842 15.2765 13 14.8787 13H5.12132C4.7235 13 4.34196 12.842 4.06066 12.5607L2.43934 10.9393C2.15803 10.658 2 10.2765 2 9.87868V7.5C2 6.67157 2.67157 6 3.5 6ZM5.5 9C5.22386 9 5 9.22386 5 9.5C5 9.77614 5.22386 10 5.5 10H14.5C14.7761 10 15 9.77614 15 9.5C15 9.22386 14.7761 9 14.5 9H5.5Z"
					/>
				</svg>
			);
	}
};

IconHdmiFilled.iconName = "hdmi--filled";

export default IconHdmiFilled;
