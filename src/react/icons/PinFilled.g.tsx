import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPinFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9.35 1.85a.625.625 0 0 1 .884 0l7.916 7.916a.625.625 0 1 1-.884.884L16.25 9.634l-5.783 5.783 1.017 1.016a.625.625 0 1 1-.884.884l-3.517-3.516-3.516 3.516a.625.625 0 1 1-.884-.884L6.2 12.917 2.683 9.4a.625.625 0 0 1 .884-.884l1.016 1.017 5.783-5.783L9.35 2.734a.625.625 0 0 1 0-.884"
						clipRule="evenodd"
						opacity={0.2}
					/>
				</svg>
			);
	}
};

IconPinFilled.iconName = "pin--filled";

export default IconPinFilled;
