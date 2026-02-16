import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47711 2 1.99996 6.47715 1.99996 12C1.99996 13.6539 2.40145 15.214 3.11228 16.5881L1.96041 20.8117C1.75682 21.5582 2.44179 22.2431 3.18829 22.0395L7.41182 20.8877C8.786 21.5985 10.3461 22 12 22ZM8 10.25C8 9.83579 8.33579 9.5 8.75 9.5H15.25C15.6642 9.5 16 9.83579 16 10.25C16 10.6642 15.6642 11 15.25 11H8.75C8.33579 11 8 10.6642 8 10.25ZM8.75 13C8.33579 13 8 13.3358 8 13.75C8 14.1642 8.33579 14.5 8.75 14.5H13.25C13.6642 14.5 14 14.1642 14 13.75C14 13.3358 13.6642 13 13.25 13H8.75Z"
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
						d="M7.99985 15C11.8658 15 14.9998 11.866 14.9998 8C14.9998 4.13401 11.8658 1 7.99985 1C4.13385 1 0.999846 4.13401 0.999846 8C0.999846 9.22794 1.31602 10.382 1.87141 11.3853L0.816074 14.5513C0.685781 14.9422 1.05765 15.3141 1.44853 15.1838L4.61454 14.1284C5.61781 14.6838 6.77191 15 7.99985 15ZM4.99988 6.5C4.99988 6.22386 5.22374 6 5.49988 6H10.4999C10.776 6 10.9999 6.22386 10.9999 6.5C10.9999 6.77614 10.776 7 10.4999 7H5.49988C5.22374 7 4.99988 6.77614 4.99988 6.5ZM5.49988 9C5.22374 9 4.99988 9.22386 4.99988 9.5C4.99988 9.77614 5.22374 10 5.49988 10H8.49988C8.77602 10 8.99988 9.77614 8.99988 9.5C8.99988 9.22386 8.77602 9 8.49988 9H5.49988Z"
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
						d="M18.0001 10C18.0001 14.4183 14.4183 18 10.0001 18C8.64816 18 7.37457 17.6647 6.25795 17.0726L2.38947 18.2332C2.00807 18.3476 1.65247 17.992 1.76689 17.6106L2.92743 13.7421C2.3354 12.6255 2.00006 11.3519 2.00006 10C2.00006 5.58172 5.58179 2 10.0001 2C14.4183 2 18.0001 5.58172 18.0001 10ZM7.50012 8C7.22398 8 7.00012 8.22386 7.00012 8.5C7.00012 8.77614 7.22398 9 7.50012 9H12.5001C12.7763 9 13.0001 8.77614 13.0001 8.5C13.0001 8.22386 12.7763 8 12.5001 8H7.50012ZM7.00012 11.5C7.00012 11.2239 7.22398 11 7.50012 11H10.5001C10.7763 11 11.0001 11.2239 11.0001 11.5C11.0001 11.7761 10.7763 12 10.5001 12H7.50012C7.22398 12 7.00012 11.7761 7.00012 11.5Z"
					/>
				</svg>
			);
	}
};

IconMessageFilled.iconName = "message--filled";

export default IconMessageFilled;
