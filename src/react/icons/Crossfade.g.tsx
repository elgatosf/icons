import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCrossfade = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.25 5a.75.75 0 0 1 0 1.5h-1.966a5.25 5.25 0 0 0-4.422 2.42l-4.46 6.969A6.75 6.75 0 0 1 4.716 19H2.75a.75.75 0 0 1 0-1.5h1.966a5.25 5.25 0 0 0 4.422-2.42l4.46-6.969A6.75 6.75 0 0 1 19.284 5zM2.75 5a.75.75 0 0 0 0 1.5h1.966a5.25 5.25 0 0 1 4.422 2.42l.45.702a.75.75 0 0 0 1.263-.809l-.45-.702A6.75 6.75 0 0 0 4.717 5zm11.663 9.378a.75.75 0 0 0-1.264.809l.45.702A6.75 6.75 0 0 0 19.283 19h1.966a.75.75 0 0 0 0-1.5h-1.966a5.25 5.25 0 0 1-4.422-2.42l-.45-.702Z" />
		</svg>
	);
};

IconCrossfade.iconName = "crossfade";

export default IconCrossfade;
