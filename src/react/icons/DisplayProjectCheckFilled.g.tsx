import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplayProjectCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 3a2 2 0 0 0-2 2v1.5h8a3.5 3.5 0 0 1 3.5 3.5v1.076a6.5 6.5 0 0 1 2.972 1.278C21.8 11.998 22 11.522 22 11V5a2 2 0 0 0-2-2z" />
			<path d="M17 10v1.019A6.5 6.5 0 0 0 11.019 18H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2m-5.75 9.5q.033 0 .064.003.207.634.53 1.204a.75.75 0 0 1-.594.293h-3.5a.75.75 0 0 1 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-.646-3.146 3.5-3.5a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDisplayProjectCheckFilled.iconName = "display-project-check--filled";

export default IconDisplayProjectCheckFilled;
