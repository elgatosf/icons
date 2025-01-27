import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChapterMarker = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.017 3.75a.75.75 0 0 1 .75-.75h5.483a.75.75 0 0 1 0 1.5h-5.483a.75.75 0 0 1-.75-.75M14.017 9.249a.75.75 0 0 1 .75-.75h5.483a.75.75 0 0 1 0 1.5h-5.483a.75.75 0 0 1-.75-.75M3.75 13.997a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM3 20.25a.75.75 0 0 1 .75-.75h7.51a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75" />
			<path
				fillRule="evenodd"
				d="M9 3H5a2 2 0 0 0-2 2v2.172a2 2 0 0 0 .586 1.414l2 2a2 2 0 0 0 2.828 0l2-2A2 2 0 0 0 11 7.172V5a2 2 0 0 0-2-2M5 4.5h4a.5.5 0 0 1 .5.5v2.172a.5.5 0 0 1-.146.353l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1-.146-.353V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconChapterMarker.iconName = "chapter-marker";

export default IconChapterMarker;
