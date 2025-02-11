import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignHorizontalCenter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12.75 3.75a.75.75 0 0 0-1.5 0V6H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.25v2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2.25v2.25a.75.75 0 0 0 1.5 0V18H15a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-2.25v-2H18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5.25zM18.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5zm-10 7a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z"
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
						d="M10 2a.5.5 0 0 1 .5.5V5h5A1.5 1.5 0 0 1 17 6.5v1A1.5 1.5 0 0 1 15.5 9h-5v2h3a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-3v2.5a.5.5 0 0 1-1 0V15h-3A1.5 1.5 0 0 1 5 13.5v-1A1.5 1.5 0 0 1 6.5 11h3V9h-5A1.5 1.5 0 0 1 3 7.5v-1A1.5 1.5 0 0 1 4.5 5h5V2.5A.5.5 0 0 1 10 2M4.5 6h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAlignHorizontalCenter.iconName = "align-horizontal-center";

export default IconAlignHorizontalCenter;
