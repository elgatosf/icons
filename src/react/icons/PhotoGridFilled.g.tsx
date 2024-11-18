import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPhotoGridFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8 14.5v-5H3v5zM3 16v3a2 2 0 0 0 2 2h3v-5zm6.5 5h5v-5h-5zm6.5 0h3a2 2 0 0 0 2-2v-3h-5zm5-6.5v-5h-5v5zM21 8V5a2 2 0 0 0-2-2h-3v5zm-6.5-5h-5v5h5zM8 3H5a2 2 0 0 0-2 2v3h5zm1.5 11.5v-5h5v5z" />
		</svg>
	);
};

IconPhotoGridFilled.iconName = "photo-grid--filled";

export default IconPhotoGridFilled;
