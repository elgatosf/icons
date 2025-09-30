import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUnderline = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.5 3.75C7.5 3.33579 7.16421 3 6.75 3C6.33579 3 6 3.33579 6 3.75V12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V3.75C18 3.33579 17.6642 3 17.25 3C16.8358 3 16.5 3.33579 16.5 3.75V12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12V3.75Z" />
					<path d="M3.75 20.5C3.33579 20.5 3 20.8358 3 21.25C3 21.6642 3.33579 22 3.75 22H20.25C20.6642 22 21 21.6642 21 21.25C21 20.8358 20.6642 20.5 20.25 20.5H3.75Z" />
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
					<path d="M6 3.5C6 3.22386 5.77614 3 5.5 3C5.22386 3 5 3.22386 5 3.5V10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10V3.5C15 3.22386 14.7761 3 14.5 3C14.2239 3 14 3.22386 14 3.5V10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10V3.5Z" />
					<path d="M3 17.5C3 17.2239 3.22386 17 3.5 17H16.5C16.7761 17 17 17.2239 17 17.5C17 17.7761 16.7761 18 16.5 18H3.5C3.22386 18 3 17.7761 3 17.5Z" />
				</svg>
			);
	}
};

IconUnderline.iconName = "underline";

export default IconUnderline;
