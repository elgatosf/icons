import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMenu = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21 5.75C21 6.16422 20.6642 6.5 20.25 6.5L3.75 6.5C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H20.25C20.6642 5 21 5.33579 21 5.75Z" />
					<path d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12Z" />
					<path d="M20.25 19C20.6642 19 21 18.6642 21 18.25C21 17.8358 20.6642 17.5 20.25 17.5L3.75 17.5C3.33579 17.5 3 17.8358 3 18.25C3 18.6642 3.33579 19 3.75 19L20.25 19Z" />
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
					<path d="M3 4.5C3 4.22386 3.22386 4 3.5 4H16.5C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5H3.5C3.22386 5 3 4.77614 3 4.5Z" />
					<path d="M3 14.5C3 14.2239 3.22386 14 3.5 14H16.5C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15H3.5C3.22386 15 3 14.7761 3 14.5Z" />
					<path d="M3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10H16.5C16.7761 10 17 9.77614 17 9.5C17 9.22386 16.7761 9 16.5 9H3.5Z" />
				</svg>
			);
	}
};

IconMenu.iconName = "menu";

export default IconMenu;
