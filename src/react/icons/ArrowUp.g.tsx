import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 21a.75.75 0 0 0 .75-.75V5.81l4.97 4.97a.75.75 0 1 0 1.06-1.06l-6.25-6.25a.75.75 0 0 0-1.06 0L5.22 9.72a.75.75 0 1 0 1.06 1.06l4.97-4.97v14.44c0 .414.336.75.75.75" />
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
						d="M10 17a.5.5 0 0 0 .5-.5V5.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4.5-4.5a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L9.5 5.207V16.5a.5.5 0 0 0 .5.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconArrowUp.iconName = "arrow-up";

export default IconArrowUp;
