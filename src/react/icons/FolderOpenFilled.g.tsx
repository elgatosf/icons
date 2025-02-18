import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderOpenFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.659 10.617 2 13.14V5a2 2 0 0 1 2-2h5.075a2 2 0 0 1 1.38.552l1.9 1.81a.5.5 0 0 0 .345.138H20a2 2 0 0 1 2 2v.516A4 4 0 0 0 21.661 8H6.045a3.5 3.5 0 0 0-3.386 2.617" />
					<path d="M21.661 9.5H6.045a2 2 0 0 0-1.935 1.495l-1.957 7.5A2 2 0 0 0 4.09 21h15.616a2 2 0 0 0 1.935-1.495l1.957-7.5A2 2 0 0 0 21.66 9.5" />
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
					<path d="M7.672 3a2 2 0 0 1 1.414.586l1.121 1.121a1 1 0 0 0 .707.293H16a2 2 0 0 1 2 2v.045A3 3 0 0 0 17.475 7H5.691a3 3 0 0 0-2.846 2.051L2 11.588V5a2 2 0 0 1 2-2z" />
					<path d="M17.475 8H5.692a2 2 0 0 0-1.898 1.368l-1.667 5A2 2 0 0 0 4.025 17h11.784a2 2 0 0 0 1.897-1.367l1.666-5A2 2 0 0 0 17.476 8" />
				</svg>
			);
	}
};

IconFolderOpenFilled.iconName = "folder-open--filled";

export default IconFolderOpenFilled;
