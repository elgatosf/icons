import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSceneCollectionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4.017 13.86A.5.5 0 0 0 5 13.732V8a3 3 0 0 1 3-3h5.415a.5.5 0 0 0 .483-.63l-.238-.887a2 2 0 0 0-2.45-1.414l-7.727 2.07a2 2 0 0 0-1.414 2.45z" />
			<path
				fillRule="evenodd"
				d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm3.5 3.5A.5.5 0 0 1 12 9h2.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m0 2.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m0 2.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m-1.25-5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSceneCollectionFilled.iconName = "scene-collection--filled";

export default IconSceneCollectionFilled;
