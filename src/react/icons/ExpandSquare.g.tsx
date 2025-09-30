import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconExpandSquare = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.75 7C11.3358 7 11 7.33579 11 7.75C11 8.16421 11.3358 8.5 11.75 8.5H14.4393L8.5 14.4393L8.5 11.75C8.5 11.3358 8.16421 11 7.75 11C7.33579 11 7 11.3358 7 11.75L7 16.25C7 16.6642 7.33579 17 7.75 17H12.25C12.6642 17 13 16.6642 13 16.25C13 15.8358 12.6642 15.5 12.25 15.5H9.56066L15.5 9.56066V12.25C15.5 12.6642 15.8358 13 16.25 13C16.6642 13 17 12.6642 17 12.25V7.75C17 7.33579 16.6642 7 16.25 7H11.75Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
			/>
		</svg>
	);
};

IconExpandSquare.iconName = "expand-square";

export default IconExpandSquare;
