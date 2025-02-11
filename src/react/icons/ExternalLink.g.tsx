import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconExternalLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 5a.5.5 0 0 1 .5-.5h3.25a.75.75 0 0 0 0-1.5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.25a.75.75 0 0 0-1.5 0V19a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5z" />
					<path d="M12.75 3a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 1 0 1.06 1.06l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75z" />
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
					<path d="M4 5a1 1 0 0 1 1-1h2.5a.5.5 0 0 0 0-1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2.5a.5.5 0 0 0-1 0V15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
					<path d="M11.5 3a.5.5 0 0 0 0 1h3.793l-6.147 6.146a.5.5 0 0 0 .708.708L16 4.707V8.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5z" />
				</svg>
			);
	}
};

IconExternalLink.iconName = "external-link";

export default IconExternalLink;
