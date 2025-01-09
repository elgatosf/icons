import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTag = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M18 9.172a2 2 0 0 1-.586 1.414l-7 7a2 2 0 0 1-2.828 0l-5.172-5.172a2 2 0 0 1 0-2.828l7-7A2 2 0 0 1 10.828 2H16a2 2 0 0 1 2 2zM16 3h-5.172a1 1 0 0 0-.707.293l-7 7a1 1 0 0 0 0 1.414l5.172 5.172a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 17 9.172V4a1 1 0 0 0-1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconTag.iconName = "tag";

export default IconTag;
