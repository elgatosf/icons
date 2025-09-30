import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconImageFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.5 11C16.8807 11 18 9.88071 18 8.5C18 7.11929 16.8807 6 15.5 6C14.1193 6 13 7.11929 13 8.5C13 9.88071 14.1193 11 15.5 11Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V14.4393L17.5303 12.4697C17.2374 12.1768 16.7626 12.1768 16.4697 12.4697L14 14.9393L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697L4.5 14.4393V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
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
					<path d="M13 9C14.1046 9 15 8.10457 15 7C15 5.89543 14.1046 5 13 5C11.8954 5 11 5.89543 11 7C11 8.10457 11.8954 9 13 9Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5ZM15 4H5C4.44772 4 4 4.44772 4 5V11.2929L7.14645 8.14645C7.34171 7.95118 7.65829 7.95118 7.85355 8.14645L11.5 11.7929L13.1464 10.1464C13.3417 9.95118 13.6583 9.95118 13.8536 10.1464L16 12.2929V5C16 4.44772 15.5523 4 15 4Z"
					/>
				</svg>
			);
	}
};

IconImageFilled.iconName = "image--filled";

export default IconImageFilled;
