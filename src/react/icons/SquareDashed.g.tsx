import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSquareDashed = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 4.5a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V5a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5zm5-.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m7 0a.75.75 0 0 1 .75-.75H19a2 2 0 0 1 2 2v1.257a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1-.75-.75M20.25 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m-16.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m16.5 7a.75.75 0 0 1 .75.75V19a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 .75-.75m-16.5 0a.75.75 0 0 1 .75.75V19a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 .75-.75M10 20.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M7 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2.5 9.5A.5.5 0 0 1 2 9V7a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5M6.5 13.5A.5.5 0 0 1 7 13h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M13.5 9.5A.5.5 0 0 1 13 9V7a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5M4.5 2H4a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1M2 11.5a.5.5 0 0 1 1 0v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2zM13.5 11a.5.5 0 0 0-.5.5v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-.5-.5M14 4.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1h.5a2 2 0 0 1 2 2z" />
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
						d="M5 4a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V5a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1zm3-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m6 0a.5.5 0 0 1 .5-.5h.5a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5M16.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m-13 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m0 6a.5.5 0 0 1 .5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5m13 0a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 .5-.5M8 16.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSquareDashed.iconName = "square-dashed";

export default IconSquareDashed;
