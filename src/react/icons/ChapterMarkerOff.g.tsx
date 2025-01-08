import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChapterMarkerOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.22 20.72a.75.75 0 1 0 1.06 1.06l.78-.78h7.2a.75.75 0 0 0 0-1.5h-5.7l4.003-4.003H20.25a.75.75 0 1 0 0-1.5h-9.187l4-3.998h5.187a.75.75 0 0 0 0-1.5h-3.688L21.78 3.28a.75.75 0 0 0-1.06-1.06z" />
			<path
				fillRule="evenodd"
				d="M5 3h4a2 2 0 0 1 2 2v2.172a2 2 0 0 1-.586 1.414l-2 2a2 2 0 0 1-2.828 0l-2-2A2 2 0 0 1 3 7.172V5a2 2 0 0 1 2-2m4 1.5H5a.5.5 0 0 0-.5.5v2.172a.5.5 0 0 0 .146.353l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 .146-.353V5a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
			<path d="m5.324 15.497 1.5-1.5H3.75a.75.75 0 0 0 0 1.5zM16.321 4.5l1.5-1.5h-3.054a.75.75 0 0 0 0 1.5z" />
		</svg>
	);
};

IconChapterMarkerOff.iconName = "chapter-marker-off";

export default IconChapterMarkerOff;
