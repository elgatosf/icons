import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChapterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.75 3a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM14.75 8.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM3 14.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 19.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM3 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		</svg>
	);
};

IconChapterFilled.iconName = "chapter--filled";

export default IconChapterFilled;
