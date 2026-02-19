import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCompanyFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M13 3C14.1046 3 15 3.89543 15 5V21H12C10.8954 21 10 20.1046 10 19V16.5C10 16.2239 9.77614 16 9.5 16H8.5C8.22386 16 8 16.2239 8 16.5V19C8 20.1046 7.10457 21 6 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H13ZM6.75 10.5C6.33579 10.5 6 10.8358 6 11.25C6 11.6642 6.33579 12 6.75 12H7.5C7.91421 12 8.25 11.6642 8.25 11.25C8.25 10.8358 7.91421 10.5 7.5 10.5H6.75ZM10.5 10.5C10.0858 10.5 9.75 10.8358 9.75 11.25C9.75 11.6642 10.0858 12 10.5 12H11.25C11.6642 12 12 11.6642 12 11.25C12 10.8358 11.6642 10.5 11.25 10.5H10.5ZM6.75 7C6.33579 7 6 7.33579 6 7.75C6 8.16421 6.33579 8.5 6.75 8.5H7.5C7.91421 8.5 8.25 8.16421 8.25 7.75C8.25 7.33579 7.91421 7 7.5 7H6.75ZM10.5 7C10.0858 7 9.75 7.33579 9.75 7.75C9.75 8.16421 10.0858 8.5 10.5 8.5H11.25C11.6642 8.5 12 8.16421 12 7.75C12 7.33579 11.6642 7 11.25 7H10.5Z"
			/>
			<path d="M19 8C20.1046 8 21 8.89543 21 10V19C21 20.1046 20.1046 21 19 21H16.5V8H19Z" />
		</svg>
	);
};

IconCompanyFilled.iconName = "company--filled";

export default IconCompanyFilled;
