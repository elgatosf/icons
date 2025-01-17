import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHomeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11.292 2.438a2 2 0 0 0-2.584 0l-5 4.23A2 2 0 0 0 3 8.197V15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8.196a2 2 0 0 0-.708-1.527z" />
				</svg>
			);
	}
};

IconHomeFilled.iconName = "home--filled";

export default IconHomeFilled;
