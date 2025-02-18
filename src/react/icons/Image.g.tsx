import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconImage = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M18 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m16-.5H5a.5.5 0 0 0-.5.5v9.44l3.97-3.97a.75.75 0 0 1 1.06 0L14 14.94l2.47-2.47a.75.75 0 0 1 1.06 0l1.97 1.97V5a.5.5 0 0 0-.5-.5M9 12.06l-4.5 4.5V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-2.44l-2.5-2.5-2.47 2.47a.75.75 0 0 1-1.06 0z"
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
					<path
						fillRule="evenodd"
						d="M15 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M3 15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM15 4H5a1 1 0 0 0-1 1v6.293l3.146-3.147a.5.5 0 0 1 .708 0l3.646 3.647 1.646-1.647a.5.5 0 0 1 .708 0L16 12.293V5a1 1 0 0 0-1-1m1 11v-1.293l-2.5-2.5-1.646 1.647a.5.5 0 0 1-.708 0L7.5 9.207l-3.5 3.5V15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconImage.iconName = "image";

export default IconImage;
