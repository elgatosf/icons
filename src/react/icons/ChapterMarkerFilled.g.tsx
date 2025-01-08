import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChapterMarkerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.767 3a.75.75 0 0 0 0 1.5h5.483a.75.75 0 0 0 0-1.5zM14.767 8.499a.75.75 0 0 0 0 1.5h5.483a.75.75 0 0 0 0-1.5zM3 14.747a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 19.5a.75.75 0 0 0 0 1.5h7.51a.75.75 0 0 0 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M9 3H5a2 2 0 0 0-2 2v2.172a2 2 0 0 0 .586 1.414l2 2a2 2 0 0 0 2.828 0l2-2A2 2 0 0 0 11 7.172V5a2 2 0 0 0-2-2"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconChapterMarkerFilled.iconName = "chapter-marker--filled";

export default IconChapterMarkerFilled;
