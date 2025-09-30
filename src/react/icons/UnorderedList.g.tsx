import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUnorderedList = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 8.75C5.60457 8.75 6.5 7.85457 6.5 6.75C6.5 5.64543 5.60457 4.75 4.5 4.75C3.39543 4.75 2.5 5.64543 2.5 6.75C2.5 7.85457 3.39543 8.75 4.5 8.75Z" />
					<path d="M4.5 19.25C5.60457 19.25 6.5 18.3546 6.5 17.25C6.5 16.1454 5.60457 15.25 4.5 15.25C3.39543 15.25 2.5 16.1454 2.5 17.25C2.5 18.3546 3.39543 19.25 4.5 19.25Z" />
					<path d="M9 6.75C9 6.33579 9.33579 6 9.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H9.75C9.33579 7.5 9 7.16421 9 6.75Z" />
					<path d="M9.75 16.5C9.33579 16.5 9 16.8358 9 17.25C9 17.6642 9.33579 18 9.75 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H9.75Z" />
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
					<path d="M4 5.5C4.55228 5.5 5 5.05228 5 4.5C5 3.94772 4.55228 3.5 4 3.5C3.44772 3.5 3 3.94772 3 4.5C3 5.05228 3.44772 5.5 4 5.5Z" />
					<path d="M6.99997 4.5C6.99997 4.22386 7.22383 4 7.49997 4H16.5C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5H7.49997C7.22383 5 6.99997 4.77614 6.99997 4.5Z" />
					<path d="M7.49997 14C7.22383 14 6.99997 14.2239 6.99997 14.5C6.99997 14.7761 7.22383 15 7.49997 15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H7.49997Z" />
					<path d="M6.99997 9.5C6.99997 9.22386 7.22383 9 7.49997 9H16.5C16.7761 9 17 9.22386 17 9.5C17 9.77614 16.7761 10 16.5 10H7.49997C7.22383 10 6.99997 9.77614 6.99997 9.5Z" />
					<path d="M5 9.5C5 10.0523 4.55228 10.5 4 10.5C3.44772 10.5 3 10.0523 3 9.5C3 8.94771 3.44772 8.5 4 8.5C4.55228 8.5 5 8.94771 5 9.5Z" />
					<path d="M4 15.5C4.55228 15.5 5 15.0523 5 14.5C5 13.9477 4.55228 13.5 4 13.5C3.44772 13.5 3 13.9477 3 14.5C3 15.0523 3.44772 15.5 4 15.5Z" />
				</svg>
			);
	}
};

IconUnorderedList.iconName = "unordered-list";

export default IconUnorderedList;
