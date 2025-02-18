import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 21h16a2 2 0 0 0 2-2V9.5H2V19a2 2 0 0 0 2 2M2 8V5a2 2 0 0 1 2-2h5.075a2 2 0 0 1 1.38.552l1.9 1.81a.5.5 0 0 0 .345.138H20a2 2 0 0 1 2 2V8z" />
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
					<path d="M4 17h12a2 2 0 0 0 2-2V8H2v7a2 2 0 0 0 2 2M2 7V5a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l1.121 1.121a1 1 0 0 0 .707.293H16a2 2 0 0 1 2 2z" />
				</svg>
			);
	}
};

IconFolderFilled.iconName = "folder--filled";

export default IconFolderFilled;
