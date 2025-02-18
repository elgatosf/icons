import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAvatar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M16 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.46 8.46 0 0 0 5.273-1.833 7.5 7.5 0 0 0-10.546 0A8.46 8.46 0 0 0 12 20.5m3.499-4.792a9 9 0 0 1 2.864 1.928 8.5 8.5 0 1 0-12.727 0 9 9 0 0 1 9.863-1.928"
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
						d="M13 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1c1.79 0 3.424-.672 4.661-1.778a6 6 0 0 0-9.322 0A6.97 6.97 0 0 0 10 17m3.102-4.275a7 7 0 0 1 2.26 1.775 7 7 0 1 0-10.724 0 7 7 0 0 1 8.464-1.775"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAvatar.iconName = "avatar";

export default IconAvatar;
