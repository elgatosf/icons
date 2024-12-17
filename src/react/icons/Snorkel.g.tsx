import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSnorkel = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M21 4a2 2 0 0 0-2-2h-.5a2 2 0 0 0-2 2v1H7a4 4 0 0 0-4 4v2.07A3.93 3.93 0 0 0 6.93 15h.321c.714 0 1.388-.215 1.95-.59.189.902.988 1.59 1.959 1.59h1.68a2 2 0 0 0 1.958-1.59c.498.331 1.08.538 1.702.581V16a1.5 1.5 0 0 1-1.5 1.5h-4a2 2 0 0 0-2 2v.5a2 2 0 0 0 2 2h4a6 6 0 0 0 6-6zm-2-.5h-.5a.5.5 0 0 0-.5.5v1.126a4 4 0 0 1 1.5.751V4a.5.5 0 0 0-.5-.5m.5 10.659a3.9 3.9 0 0 1-1.5.73V16a3 3 0 0 1-3 3h-4a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h4a4.5 4.5 0 0 0 4.5-4.5zM17 6.5H7A2.5 2.5 0 0 0 4.5 9v2.07a2.43 2.43 0 0 0 2.43 2.43h.321a2.02 2.02 0 0 0 1.96-1.53l.091-.364a2.78 2.78 0 0 1 5.396 0l.09.364a2.02 2.02 0 0 0 1.96 1.53h.321a2.43 2.43 0 0 0 2.431-2.43V9A2.5 2.5 0 0 0 17 6.5m-6.196 5.608a1.2 1.2 0 0 1 2.392 0l.143 1.854a.5.5 0 0 1-.499.538h-1.68a.5.5 0 0 1-.499-.538z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSnorkel.iconName = "snorkel";

export default IconSnorkel;
