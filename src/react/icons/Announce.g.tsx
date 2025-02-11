import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAnnounce = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M2 8.897a2 2 0 0 1 1.311-1.878l11-4.033A2 2 0 0 1 17 4.864v9.272a2 2 0 0 1-2.688 1.878L9 14.067V15a2 2 0 1 1-4 0v-2.4l-1.689-.62A2 2 0 0 1 2 10.104zm1.656-.939 11-4.033A1 1 0 0 1 16 4.864v9.272a1 1 0 0 1-1.344.94l-11-4.034A1 1 0 0 1 3 10.103V8.897a1 1 0 0 1 .656-.939M6 12.967V15a1 1 0 1 0 2 0v-1.3z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconAnnounce.iconName = "announce";

export default IconAnnounce;
