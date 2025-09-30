import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbUpFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8 20H15.9448C17.7486 20 19.3293 18.7927 19.8039 17.0525L21.311 11.5262C21.658 10.254 20.7002 9 19.3815 9H14V5.30522C14 4.03208 12.9679 3 11.6948 3C10.6865 3 9.79523 3.65526 9.49449 4.61763L8 9.4V20Z" />
			<path d="M6.5 20V11H5C3.89543 11 3 11.8954 3 13V18C3 19.1046 3.89543 20 5 20H6.5Z" />
		</svg>
	);
};

IconThumbUpFilled.iconName = "thumb-up--filled";

export default IconThumbUpFilled;
