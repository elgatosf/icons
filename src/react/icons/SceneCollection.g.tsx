import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSceneCollection = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.469 3.035a1 1 0 0 1 1.225.707l.237.887a.5.5 0 0 0 .967-.259l-.238-.887a2 2 0 0 0-2.45-1.414l-7.727 2.07a2 2 0 0 0-1.414 2.45l1.948 7.272a.5.5 0 1 0 .966-.26L3.034 6.33a1 1 0 0 1 .708-1.225zM11.5 9.5A.5.5 0 0 1 12 9h2.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5M11.5 12a.5.5 0 0 1 .5-.5h2.5a.5.5 0 1 1 0 1H12a.5.5 0 0 1-.5-.5M11.5 14.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 1 1 0 1H12a.5.5 0 0 1-.5-.5" />
			<path d="M10.25 9.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.5 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.25 14.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" />
			<path
				fillRule="evenodd"
				d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSceneCollection.iconName = "scene-collection";

export default IconSceneCollection;
