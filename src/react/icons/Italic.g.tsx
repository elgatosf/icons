import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconItalic = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M14.5145 3.00003H18.25C18.6642 3.00003 19 3.33581 19 3.75003C19 4.16424 18.6642 4.50003 18.25 4.50003H15.0564L10.511 19.5H13.25C13.6642 19.5 14 19.8358 14 20.25C14 20.6642 13.6642 21 13.25 21H9.51953C9.50673 21.0004 9.49389 21.0004 9.48102 21H5.75C5.33579 21 5 20.6642 5 20.25C5 19.8358 5.33579 19.5 5.75 19.5H8.94361L13.4891 4.50003H10.75C10.3358 4.50003 10 4.16424 10 3.75003C10 3.33581 10.3358 3.00003 10.75 3.00003H14.4849C14.4948 2.99983 14.5046 2.99983 14.5145 3.00003Z" />
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
					<path d="M15.5 3.00001H12.0113C12.0036 2.99983 11.996 2.99983 11.9884 3.00001H8.5C8.22386 3.00001 8 3.22387 8 3.50001C8 3.77615 8.22386 4.00001 8.5 4.00001H11.323L7.63071 16H4.5C4.22386 16 4 16.2239 4 16.5C4 16.7762 4.22386 17 4.5 17H7.98872C7.99637 17.0002 8.004 17.0002 8.01161 17H11.5C11.7761 17 12 16.7762 12 16.5C12 16.2239 11.7761 16 11.5 16H8.67698L12.3693 4.00001H15.5C15.7761 4.00001 16 3.77615 16 3.50001C16 3.22387 15.7761 3.00001 15.5 3.00001Z" />
				</svg>
			);
	}
};

IconItalic.iconName = "italic";

export default IconItalic;
