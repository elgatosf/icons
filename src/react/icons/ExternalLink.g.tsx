import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconExternalLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M10.5 3a.5.5 0 0 0 0 1h4.793l-6.147 6.146a.5.5 0 0 0 .708.708L16 4.707V9.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5z" />
				</svg>
			);
	}
};

IconExternalLink.iconName = "external-link";

export default IconExternalLink;
