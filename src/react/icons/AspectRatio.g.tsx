import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAspectRatio = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M20 20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zm0-14.5H4a.5.5 0 0 0-.5.5v2H16a2 2 0 0 1 2 2v8.5h2a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5m-7.5 4h-9V18a.5.5 0 0 0 .5.5h8.5zm1.5 9h2.5V10a.5.5 0 0 0-.5-.5h-2z"
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
					<path
						fillRule="evenodd"
						d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1V9a2 2 0 0 0-2-2H3V6a1 1 0 0 1 1-1m6 10H4a1 1 0 0 1-1-1V8h7zm1 0h3V9a1 1 0 0 0-1-1h-2z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAspectRatio.iconName = "aspect-ratio";

export default IconAspectRatio;
