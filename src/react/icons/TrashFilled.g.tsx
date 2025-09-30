import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTrashFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 1.25C9.92893 1.25 8.25 2.92893 8.25 5L3.75 5C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H5.08824L5.88926 20.1174C5.95145 21.1746 6.82686 22 7.88581 22H16.1142C17.1731 22 18.0486 21.1746 18.1107 20.1174L18.9118 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5L15.75 5C15.75 2.92893 14.0711 1.25 12 1.25ZM14.25 5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5H14.25ZM10.25 8C10.6642 8 11 8.33579 11 8.75V18.25C11 18.6642 10.6642 19 10.25 19C9.83579 19 9.5 18.6642 9.5 18.25L9.5 8.75C9.5 8.33579 9.83579 8 10.25 8ZM14.5 8.75C14.5 8.33579 14.1642 8 13.75 8C13.3358 8 13 8.33579 13 8.75V18.25C13 18.6642 13.3358 19 13.75 19C14.1642 19 14.5 18.6642 14.5 18.25V8.75Z"
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
						d="M7 4V3C7 1.89543 7.89543 1 9 1H11C12.1046 1 13 1.89543 13 3V4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H15.963L15.1051 16.1534C15.0249 17.1954 14.156 18 13.111 18H6.88905C5.84397 18 4.97509 17.1954 4.89494 16.1534L4.03698 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H7ZM8 3C8 2.44772 8.44772 2 9 2H11C11.5523 2 12 2.44772 12 3V4H8V3ZM9 7.5C9 7.22386 8.77614 7 8.5 7C8.22386 7 8 7.22386 8 7.5V14.5C8 14.7761 8.22386 15 8.5 15C8.77614 15 9 14.7761 9 14.5V7.5ZM11.5 7C11.7761 7 12 7.22386 12 7.5V14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5V7.5C11 7.22386 11.2239 7 11.5 7Z"
					/>
				</svg>
			);
	}
};

IconTrashFilled.iconName = "trash--filled";

export default IconTrashFilled;
