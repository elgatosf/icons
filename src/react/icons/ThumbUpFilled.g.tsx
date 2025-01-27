import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbUpFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M8 20h7.945a4 4 0 0 0 3.859-2.948l1.507-5.526A2 2 0 0 0 19.381 9H14V5.305a2.305 2.305 0 0 0-4.506-.687L8 9.4zM6.5 20v-9H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z" />
		</svg>
	);
};

IconThumbUpFilled.iconName = "thumb-up--filled";

export default IconThumbUpFilled;
