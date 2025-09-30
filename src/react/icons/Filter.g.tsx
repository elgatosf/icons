import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFilter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25L17.25 11.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75L6.75 12.75C6.33579 12.75 6 12.4142 6 12Z" />
					<path d="M14.25 19C14.6642 19 15 18.6642 15 18.25C15 17.8358 14.6642 17.5 14.25 17.5H9.75C9.33579 17.5 9 17.8358 9 18.25C9 18.6642 9.33579 19 9.75 19H14.25Z" />
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
					<path d="M11 13C11.2761 13 11.5 13.2239 11.5 13.5C11.5 13.7761 11.2761 14 11 14H9C8.72386 14 8.5 13.7761 8.5 13.5C8.5 13.2239 8.72386 13 9 13H11Z" />
					<path d="M12.5 10C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H7.5C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10H12.5Z" />
					<path d="M14 7C14.2761 7 14.5 7.22386 14.5 7.5C14.5 7.77614 14.2761 8 14 8H6C5.72386 8 5.5 7.77614 5.5 7.5C5.5 7.22386 5.72386 7 6 7H14Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z"
					/>
				</svg>
			);
	}
};

IconFilter.iconName = "filter";

export default IconFilter;
