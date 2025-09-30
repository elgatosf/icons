import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLutFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 4C2 2.89543 2.89543 2 4 2H14C15.1046 2 16 2.89543 16 4V5.75C16 6.16421 15.6642 6.5 15.25 6.5H9.5C7.84315 6.5 6.5 7.84315 6.5 9.5V15.25C6.5 15.6642 6.16421 16 5.75 16H4C2.89543 16 2 15.1046 2 14V4Z" />
					<path d="M8 10C8 8.89543 8.89543 8 10 8H11.667V11.6719H8V10Z" />
					<path d="M13.167 11.6719V8H16.833V11.6719H13.167Z" />
					<path d="M18.333 11.6719V8H20.0043C21.1088 8 22.0043 8.89543 22.0043 10V11.6719H18.333Z" />
					<path d="M18.333 13.1719H22.0043V17.0508H18.333V13.1719Z" />
					<path d="M18.333 18.5508H22.0043V20.0005C22.0043 21.1051 21.1088 22.0005 20.0043 22.0005H18.333V18.5508Z" />
					<path d="M16.833 18.5508V22.0005H13.167V18.5508H16.833Z" />
					<path d="M11.667 18.5508V22.0005H10C8.89543 22.0005 8 21.1051 8 20.0005V18.5508H11.667Z" />
					<path d="M11.667 17.0508H8V13.1719H11.667V17.0508Z" />
					<path d="M16.833 17.0508V13.1719H13.167V17.0508H16.833Z" />
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
						d="M3.5 1C2.11929 1 1 2.11929 1 3.5V8.73223C1 9.98469 2.01531 11 3.26777 11C3.69596 11 4 10.6529 4 10.2247V7C4 5.34315 5.34315 4 7 4H10.5C10.7761 4 11 3.77614 11 3.5C11 2.11929 9.88071 1 8.5 1H3.5ZM5 7C5 5.89543 5.89543 5 7 5H7.66699V7.66797H5V7ZM8.66699 7.66797V5H11.333V7.66797H8.66699ZM12.333 7.66797V5H13C14.1046 5 15 5.89543 15 7V7.66797H12.333ZM12.333 8.66797H15V11.332H12.333V8.66797ZM12.333 12.332H15V13C15 14.1046 14.1046 15 13 15H12.333V12.332ZM11.333 12.332V15H8.66699V12.332H11.333ZM7.66699 12.332V15H7C5.89543 15 5 14.1046 5 13V12.332H7.66699ZM7.66699 11.332H5V8.66797H7.66699V11.332ZM11.333 11.332V8.66797H8.66699V11.332H11.333Z"
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
					<path d="M2 4C2 2.89543 2.89543 2 4 2H11C12.1046 2 13 2.89543 13 4V5.5C13 5.77614 12.7761 6 12.5 6H9C7.34315 6 6 7.34315 6 9V12.5C6 12.7761 5.77614 13 5.5 13H4C2.89543 13 2 12.1046 2 11V4Z" />
					<path d="M7 9C7 7.89543 7.89543 7 9 7H10V10H7V9Z" />
					<path d="M11 10V7H14V10H11Z" />
					<path d="M15 10V7H16.0001C17.1047 7 18.0001 7.89543 18.0001 9V10H15Z" />
					<path d="M15 11H18.0001V14H15V11Z" />
					<path d="M15 15H18.0001V15.9972C18.0001 17.1018 17.1047 17.9972 16.0001 17.9972L15 17.9972V15Z" />
					<path d="M14 15V17.9972H11V15H14Z" />
					<path d="M10 15V17.9972L9 17.9972C7.89543 17.9972 7 17.1018 7 15.9972V15H10Z" />
					<path d="M10 14H7V11H10V14Z" />
					<path d="M14 14V11H11V14H14Z" />
				</svg>
			);
	}
};

IconLutFilled.iconName = "lut--filled";

export default IconLutFilled;
