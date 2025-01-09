import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
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
			<path d="M8 14.5v-5H3v5zM3 16v3a2 2 0 0 0 2 2h3v-5zM9.5 21h5v-5h-5zM16 21h3a2 2 0 0 0 2-2v-3h-5zM21 14.5v-5h-5v5zM21 8V5a2 2 0 0 0-2-2h-3v5zM14.5 3h-5v5h5zM8 3H5a2 2 0 0 0-2 2v3h5zM9.5 14.5v-5h5v5z" />
		</svg>
	);
};

IconPhotoGridFilled.iconName = "photo-grid--filled";

export default IconPhotoGridFilled;
