import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCpu = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M8 10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M7.75 2a.75.75 0 0 1 .75.75V4h2.75V2.75a.75.75 0 0 1 1.5 0V4h2.75V2.75a.75.75 0 0 1 1.5 0V4h1a2 2 0 0 1 2 2v1h1.25a.75.75 0 0 1 0 1.5H20v2.75h1.25a.75.75 0 0 1 0 1.5H20v2.75h1.25a.75.75 0 0 1 0 1.5H20v1a2 2 0 0 1-2 2h-1v1.25a.75.75 0 0 1-1.5 0V20h-2.75v1.25a.75.75 0 0 1-1.5 0V20H8.5v1.25a.75.75 0 0 1-1.5 0V20H6a2 2 0 0 1-2-2v-1H2.75a.75.75 0 0 1 0-1.5H4v-2.75H2.75a.75.75 0 0 1 0-1.5H4V8.5H2.75a.75.75 0 0 1 0-1.5H4V6a2 2 0 0 1 2-2h1V2.75A.75.75 0 0 1 7.75 2M5.5 6a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCpu.iconName = "cpu";

export default IconCpu;
