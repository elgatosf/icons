import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUnderline = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.5 3.75a.75.75 0 0 0-1.5 0V12a6 6 0 0 0 12 0V3.75a.75.75 0 0 0-1.5 0V12a4.5 4.5 0 1 1-9 0zM3.75 20.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z" />
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
					<path d="M6 3.5a.5.5 0 0 0-1 0V10a5 5 0 0 0 10 0V3.5a.5.5 0 0 0-1 0V10a4 4 0 0 1-8 0zM3 17.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5" />
				</svg>
			);
	}
};

IconUnderline.iconName = "underline";

export default IconUnderline;
