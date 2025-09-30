import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAspectRatio = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.0355 2.787 19.8873 3.79551 19.9897C3.86275 19.9965 3.93096 20 4 20H20ZM20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V8H16C17.1046 8 18 8.89543 18 10V18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V6C20.5 5.72386 20.2761 5.5 20 5.5ZM12.5 9.5H3.5V18C3.5 18.2589 3.69675 18.4718 3.94888 18.4974C3.96569 18.4991 3.98274 18.5 4 18.5H12.5V9.5ZM14 18.5H16.5V10C16.5 9.72386 16.2761 9.5 16 9.5H14V18.5Z"
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
						d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6ZM4 5H16C16.5523 5 17 5.44772 17 6V14C17 14.5523 16.5523 15 16 15H15V9C15 7.89543 14.1046 7 13 7H3V6C3 5.44772 3.44772 5 4 5ZM10 15H4C3.44772 15 3 14.5523 3 14V8H10V15ZM11 15H14V9C14 8.44772 13.5523 8 13 8H11V15Z"
					/>
				</svg>
			);
	}
};

IconAspectRatio.iconName = "aspect-ratio";

export default IconAspectRatio;
