import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHomeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 8.978A2 2 0 0 1 3.772 7.4l7-5.444a2 2 0 0 1 2.456 0l7 5.444A2 2 0 0 1 21 8.98V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-6h-3v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
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
					<path d="M11.292 2.438a2 2 0 0 0-2.584 0l-5 4.23A2 2 0 0 0 3 8.197V15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8.196a2 2 0 0 0-.708-1.527z" />
				</svg>
			);
	}
};

IconHomeFilled.iconName = "home--filled";

export default IconHomeFilled;
