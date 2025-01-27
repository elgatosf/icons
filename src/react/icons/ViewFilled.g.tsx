import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconViewFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
					<path
						fillRule="evenodd"
						d="M1.774 9.343a1.61 1.61 0 0 0 0 1.313A9 9 0 0 0 10 16a9 9 0 0 0 8.226-5.344 1.62 1.62 0 0 0 0-1.313A9 9 0 0 0 10 4a9 9 0 0 0-8.226 5.343M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconViewFilled.iconName = "view--filled";

export default IconViewFilled;
