import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconRss = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.75 6a.75.75 0 0 0 0 1.5 9.75 9.75 0 0 1 9.75 9.75.75.75 0 0 0 1.5 0A11.25 11.25 0 0 0 6.75 6" />
			<path d="M6.75 10.5a.75.75 0 0 0 0 1.5A5.25 5.25 0 0 1 12 17.25a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-6.75-6.75m2.25 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconRss.iconName = "rss";

export default IconRss;
