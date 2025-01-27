import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAttachment = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M8 5.5a3.5 3.5 0 1 1 7 0V13a5 5 0 0 1-10 0V6.5a.5.5 0 0 1 1 0V13a4 4 0 0 0 8 0V5.5a2.5 2.5 0 0 0-5 0V13a1 1 0 1 0 2 0V6.5a.5.5 0 0 1 1 0V13a2 2 0 1 1-4 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAttachment.iconName = "attachment";

export default IconAttachment;
