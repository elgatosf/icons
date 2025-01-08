import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWaveNeoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7 6.5A4.5 4.5 0 0 1 11.5 2h1A4.5 4.5 0 0 1 17 6.5v5h-4.25v-.75a.75.75 0 0 0-1.5 0v.75H7zM7 13v1H3.25a.75.75 0 0 0 0 1.5H4a7.5 7.5 0 0 0 3.573 6.39.75.75 0 0 0 .786-1.278A6 6 0 0 1 5.5 15.5H7a4.5 4.5 0 0 0 4.5 4.5h1a4.5 4.5 0 0 0 4.5-4.5V13h-4.25v2.25a.75.75 0 0 1-1.5 0V13z" />
		</svg>
	);
};

IconWaveNeoFilled.iconName = "wave-neo--filled";

export default IconWaveNeoFilled;
