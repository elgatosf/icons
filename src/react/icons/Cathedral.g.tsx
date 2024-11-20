import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCathedral = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.481 3.005c-.21-1.077-1.751-1.077-1.962 0L3.037 10.56a2 2 0 0 0-.037.384V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5a1 1 0 1 1 2 0V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-9.056q0-.194-.037-.385L19.48 3.005c-.21-1.077-1.751-1.077-1.962 0l-1.482 7.555a2 2 0 0 0-.037.384v.556l-3.25-3.25v-1.5a.75.75 0 0 0-1.5 0v1.5L8 11.5v-.556a2 2 0 0 0-.037-.384zM6.324 10H4.676L5.5 5.796zM8 20.5v-6.676a.5.5 0 0 1 .146-.349L12 9.621l3.854 3.854a.5.5 0 0 1 .146.349V20.5h-1a.5.5 0 0 1-.5-.5v-2.5a2.5 2.5 0 0 0-5 0V20a.5.5 0 0 1-.5.5zm-1.5-6.683V11.5h-2V20a.5.5 0 0 0 .5.5h1.5zM19.324 10h-1.648l.824-4.204zM17.5 20.5H19a.5.5 0 0 0 .5-.5v-8.5h-2z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCathedral.iconName = "cathedral";

export default IconCathedral;
