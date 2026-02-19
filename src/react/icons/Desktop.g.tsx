import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDesktop = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20.25 19.5C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H20.25Z" />
			<path d="M14.25 16.5C14.6642 16.5 15 16.8358 15 17.25C15 17.6642 14.6642 18 14.25 18H9.75C9.33579 18 9 17.6642 9 17.25C9 16.8358 9.33579 16.5 9.75 16.5H14.25Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19 3C20.1046 3 21 3.89543 21 5V13L20.9893 13.2041C20.8938 14.1457 20.1457 14.8938 19.2041 14.9893L19 15H5L4.7959 14.9893C3.85435 14.8938 3.1062 14.1457 3.01074 13.2041L3 13V5C3 3.89543 3.89543 3 5 3H19ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V13C4.5 13.2761 4.72386 13.5 5 13.5H19C19.2761 13.5 19.5 13.2761 19.5 13V5C19.5 4.72386 19.2761 4.5 19 4.5H5Z"
			/>
		</svg>
	);
};

IconDesktop.iconName = "desktop";

export default IconDesktop;
