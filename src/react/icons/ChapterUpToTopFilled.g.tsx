import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChapterUpToTopFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14 3.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M14 9.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M3 14.75a.75.75 0 0 1 .75-.75h8.272a6.5 6.5 0 0 0-.709 1.5H3.75a.75.75 0 0 1-.75-.75M11.845 20.707a6.5 6.5 0 0 1-.53-1.204l-.065-.003h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 .595-.293M3 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.854-.354-2 2a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0M15 15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconChapterUpToTopFilled.iconName = "chapter-up-to-top--filled";

export default IconChapterUpToTopFilled;
