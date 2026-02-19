import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBookClosed = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M18 2C19.1046 2 20 2.89543 20 4V16C20 16.9316 19.3622 17.7113 18.5 17.9336V20.5H19.25C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22H6C4.96435 22 4.113 21.2128 4.01074 20.2041L4 20V4C4 2.89543 4.89543 2 6 2H18ZM6 18C5.72386 18 5.5 18.2239 5.5 18.5V20C5.5 20.2761 5.72386 20.5 6 20.5H17V18H6ZM6 3.5C5.72386 3.5 5.5 3.72386 5.5 4V16.5654C5.65999 16.5242 5.82714 16.5 6 16.5H7.5V3.5H6ZM9 16.5H18C18.2761 16.5 18.5 16.2761 18.5 16V4C18.5 3.72386 18.2761 3.5 18 3.5H9V16.5Z"
			/>
		</svg>
	);
};

IconBookClosed.iconName = "book-closed";

export default IconBookClosed;
