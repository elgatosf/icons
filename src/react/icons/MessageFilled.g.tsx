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
						d="M7.99997 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 7.99997 1C4.13397 1 0.999968 4.13401 0.999968 8C0.999968 9.22794 1.31615 10.382 1.87153 11.3853L0.816196 14.5513C0.685903 14.9422 1.05777 15.3141 1.44865 15.1838L4.61466 14.1284C5.61794 14.6838 6.77203 15 7.99997 15ZM5 6.5C5 6.22386 5.22386 6 5.5 6H10.5C10.7761 6 11 6.22386 11 6.5C11 6.77614 10.7761 7 10.5 7H5.5C5.22386 7 5 6.77614 5 6.5ZM5.5 9C5.22386 9 5 9.22386 5 9.5C5 9.77614 5.22386 10 5.5 10H8.5C8.77614 10 9 9.77614 9 9.5C9 9.22386 8.77614 9 8.5 9H5.5Z"
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
						d="M17.9999 10C17.9999 14.4183 14.4182 18 9.99994 18C8.64804 18 7.37445 17.6647 6.25783 17.0726L2.38935 18.2332C2.00795 18.3476 1.65234 17.992 1.76677 17.6106L2.92731 13.7421C2.33528 12.6255 1.99994 11.3519 1.99994 10C1.99994 5.58172 5.58166 2 9.99994 2C14.4182 2 17.9999 5.58172 17.9999 10ZM7.5 8C7.22386 8 7 8.22386 7 8.5C7 8.77614 7.22386 9 7.5 9H12.5C12.7761 9 13 8.77614 13 8.5C13 8.22386 12.7761 8 12.5 8H7.5ZM7 11.5C7 11.2239 7.22386 11 7.5 11H10.5C10.7761 11 11 11.2239 11 11.5C11 11.7761 10.7761 12 10.5 12H7.5C7.22386 12 7 11.7761 7 11.5Z"
					/>
				</svg>
			);
	}
};

IconMessageFilled.iconName = "message--filled";

export default IconMessageFilled;
