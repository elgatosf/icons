import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconImageFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
					<path
						fillRule="evenodd"
						d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v9.44l-1.97-1.97a.75.75 0 0 0-1.06 0L14 14.94l-4.47-4.47a.75.75 0 0 0-1.06 0L4.5 14.44V5a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
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
					<path d="M13 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
					<path
						fillRule="evenodd"
						d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 1H5a1 1 0 0 0-1 1v6.293l3.146-3.147a.5.5 0 0 1 .708 0l3.646 3.647 1.646-1.647a.5.5 0 0 1 .708 0L16 12.293V5a1 1 0 0 0-1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconImageFilled.iconName = "image--filled";

export default IconImageFilled;
