import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGroup = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M11 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 12.5A5.5 5.5 0 0 0 2 18a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 5.5 5.5 0 0 0-5.5-5.5m-4 5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-8 0"
						clipRule="evenodd"
					/>
					<path d="M14.466 14.555A4 4 0 0 1 20.5 18a.5.5 0 0 1-.5.5h-4.937a.75.75 0 0 0 0 1.5H20a2 2 0 0 0 2-2 5.5 5.5 0 0 0-8.298-4.736.75.75 0 0 0 .764 1.29" />
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
						d="M7 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M2 15a5 5 0 0 1 10 0 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m2 1a1 1 0 0 1-1-1 4 4 0 0 1 8 0 1 1 0 0 1-1 1z"
						clipRule="evenodd"
					/>
					<path d="M12.157 11.267A3.5 3.5 0 0 1 17 14.5v.5a1 1 0 0 1-1 1h-2.837a.5.5 0 1 0 0 1H16a2 2 0 0 0 2-2v-.5a4.5 4.5 0 0 0-6.227-4.157.5.5 0 0 0 .384.924" />
					<path
						fillRule="evenodd"
						d="M16 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconGroup.iconName = "group";

export default IconGroup;
