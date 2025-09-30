import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAttachment = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V7.75C5 7.33579 5.33579 7 5.75 7C6.16421 7 6.5 7.33579 6.5 7.75V15C6.5 18.0376 8.96243 20.5 12 20.5C15.0376 20.5 17.5 18.0376 17.5 15V7C17.5 5.067 15.933 3.5 14 3.5C12.067 3.5 10.5 5.067 10.5 7V15C10.5 15.8284 11.1716 16.5 12 16.5C12.8284 16.5 13.5 15.8284 13.5 15V7.75C13.5 7.33579 13.8358 7 14.25 7C14.6642 7 15 7.33579 15 7.75V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z"
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
						d="M8 5.5C8 3.567 9.567 2 11.5 2C13.433 2 15 3.567 15 5.5V13C15 15.7614 12.7614 18 10 18C7.23858 18 5 15.7614 5 13V6.5C5 6.22386 5.22386 6 5.5 6C5.77614 6 6 6.22386 6 6.5V13C6 15.2091 7.79086 17 10 17C12.2091 17 14 15.2091 14 13V5.5C14 4.11929 12.8807 3 11.5 3C10.1193 3 9 4.11929 9 5.5V13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V6.5C11 6.22386 11.2239 6 11.5 6C11.7761 6 12 6.22386 12 6.5V13C12 14.1046 11.1046 15 10 15C8.89543 15 8 14.1046 8 13V5.5Z"
					/>
				</svg>
			);
	}
};

IconAttachment.iconName = "attachment";

export default IconAttachment;
