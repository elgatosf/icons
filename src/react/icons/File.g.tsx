import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFile = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 10.25V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.75zm-1.5.75H13a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5zm-1.371-1.5L12.5 4.871V9a.5.5 0 0 0 .5.5z"
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
						d="M4 4a2 2 0 0 1 2-2h4.672a2 2 0 0 1 1.414.586l3.328 3.328A2 2 0 0 1 16 7.328V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3a2 2 0 0 0 2 2h3zm-.056-9H12a1 1 0 0 1-1-1V3.055a1 1 0 0 1 .379.238l3.328 3.328a1 1 0 0 1 .237.379"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFile.iconName = "file";

export default IconFile;
