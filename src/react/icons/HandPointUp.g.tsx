import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHandPointUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7.5 4.25a2.25 2.25 0 0 1 4.5 0v2.878q.354-.126.75-.128c.876 0 1.635.5 2.006 1.23a2.251 2.251 0 0 1 3.165 1.427A2.25 2.25 0 0 1 21 11.75v2.026a8.225 8.225 0 0 1-15.688 3.458l-2.093-4.517a2.283 2.283 0 0 1 4.112-1.98l.169.337zm1.494 10.094a1 1 0 0 0 .006-.11V4.25a.75.75 0 0 1 1.5 0v7a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 1 1.5 0v2.025a6.725 6.725 0 0 1-12.827 2.827L4.58 12.086a.783.783 0 0 1 1.41-.679l1.582 3.165a.75.75 0 0 0 1.422-.227"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconHandPointUp.iconName = "hand-point-up";

export default IconHandPointUp;
