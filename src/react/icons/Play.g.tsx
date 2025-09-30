import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlay = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M7.25 19.3613L19.25 12.433C19.5833 12.2406 19.5833 11.7595 19.25 11.567L7.25 4.63882C6.91667 4.44637 6.5 4.68693 6.5 5.07183L6.5 18.9282C6.5 19.3131 6.91667 19.5537 7.25 19.3613ZM20 13.7321C21.3333 12.9623 21.3333 11.0378 20 10.268L8 3.33978C6.66667 2.56998 5 3.53223 5 5.07183L5 18.9282C5 20.4678 6.66667 21.4301 8 20.6603L20 13.7321Z"
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
						d="M6.5 16.0621L15.5 10.8659C16.1667 10.481 16.1667 9.51879 15.5 9.13389L6.5 3.93774C5.83334 3.55284 5 4.03396 5 4.80377L5 15.1961C5 15.9659 5.83333 16.447 6.5 16.0621ZM16 11.732C17.3333 10.9622 17.3333 9.03767 16 8.26787L7 3.07171C5.66667 2.30191 4 3.26417 4 4.80377L4 15.1961C4 16.7357 5.66667 17.6979 7 16.9281L16 11.732Z"
					/>
				</svg>
			);
	}
};

IconPlay.iconName = "play";

export default IconPlay;
