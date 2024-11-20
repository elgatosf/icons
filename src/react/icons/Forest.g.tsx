import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconForest = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.5 18v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2H2.938a1 1 0 0 1-.866-1.5l2.02-3.5h-.288a.997.997 0 0 1-.866-1.5l5.196-9a1 1 0 0 1 1.732 0L12 6.196 14.134 2.5a1 1 0 0 1 1.732 0l5.196 9a.997.997 0 0 1-.866 1.5h-.288l2.02 3.5a1 1 0 0 1-.866 1.5H17.5v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2zM8 18v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2zm6 0v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2zm6.196-1.5-2.886-5h2.02L15 4l-2.134 3.696 2.196 3.804a.997.997 0 0 1-.866 1.5h-.288l2.02 3.5zm-13.505-5-2.887 5h10.392l-2.886-5h2.02L9 4l-4.33 7.5h2.02Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconForest.iconName = "forest";

export default IconForest;
