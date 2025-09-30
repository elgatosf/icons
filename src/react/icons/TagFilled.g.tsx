import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTagFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M19 3H12.8284C12.298 3 11.7893 3.21071 11.4142 3.58579L3.41421 11.5858C2.63316 12.3668 2.63317 13.6332 3.41421 14.4142L9.58579 20.5858C10.3668 21.3668 11.6332 21.3668 12.4142 20.5858L20.4142 12.5858C20.7893 12.2107 21 11.702 21 11.1716V5C21 3.89543 20.1046 3 19 3ZM16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
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
						d="M16 2H10.8284C10.298 2 9.78929 2.21071 9.41421 2.58579L2.41421 9.58579C1.63316 10.3668 1.63317 11.6332 2.41421 12.4142L7.58579 17.5858C8.36684 18.3668 9.63317 18.3668 10.4142 17.5858L17.4142 10.5858C17.7893 10.2107 18 9.70201 18 9.17157V4C18 2.89543 17.1046 2 16 2ZM14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7Z"
					/>
				</svg>
			);
	}
};

IconTagFilled.iconName = "tag--filled";

export default IconTagFilled;
