import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMountainFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.293 4.793 5.851 8.79 8 10.94l1.47-1.47a.75.75 0 0 1 1.06 0L12 10.94l2.15-2.15-2.443-3.997c-.78-1.277-2.634-1.277-3.414 0" />
			<path d="m.86 16.957 4.186-6.85L7.47 12.53a.75.75 0 0 0 1.06 0L10 11.06l1.47 1.47a.75.75 0 0 0 1.06 0l2.424-2.423 4.186 6.85c.204.333.297.69.297 1.038 0 1.043-.832 2.005-2.003 2.005H2.566C1.004 20 .046 18.29.86 16.957" />
			<path d="m20.42 16.175-5.488-8.982c.9-.567 2.176-.345 2.783.665l5.468 9.113c.8 1.333-.16 3.029-1.715 3.029h-1.161c.744-1.073.894-2.548.113-3.825" />
		</svg>
	);
};

IconMountainFilled.iconName = "mountain--filled";

export default IconMountainFilled;
