import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCouchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V7.5H19C17.067 7.5 15.5 9.067 15.5 11V12.5H8.5V11C8.5 9.067 6.933 7.5 5 7.5H4V6Z" />
			<path d="M17 11C17 9.89543 17.8954 9 19 9H20C21.1046 9 22 9.89543 22 11V17C22 18.1046 21.1046 19 20 19V20.25C20 20.6642 19.6642 21 19.25 21C18.8358 21 18.5 20.6642 18.5 20.25V19H5.5V20.25C5.5 20.6642 5.16421 21 4.75 21C4.33579 21 4 20.6642 4 20.25L4 19C2.89543 19 2 18.1046 2 17V11C2 9.89543 2.89543 9 4 9H5C6.10457 9 7 9.89543 7 11V13.25C7 13.6642 7.33579 14 7.75 14H16.25C16.6642 14 17 13.6642 17 13.25V11Z" />
		</svg>
	);
};

IconCouchFilled.iconName = "couch--filled";

export default IconCouchFilled;
