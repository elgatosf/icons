import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSceneCollection = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M15.592 3.483a2 2 0 0 0-2.45-1.414l-9.66 2.588a2 2 0 0 0-1.413 2.45l2.974 11.061a.75.75 0 1 0 1.448-.39L3.518 6.719a.5.5 0 0 1 .353-.612l9.66-2.588a.5.5 0 0 1 .612.353l.555 2.073a.75.75 0 1 0 1.45-.388z" />
					<path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M15 14.25a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5zM14.25 18a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" />
					<path
						fillRule="evenodd"
						d="M8 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm2-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
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
	}
};

IconSceneCollection.iconName = "scene-collection";

export default IconSceneCollection;
