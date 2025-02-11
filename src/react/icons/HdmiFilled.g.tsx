import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHdmiFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4.414 16.914a2 2 0 0 0 1.414.586h12.344a2 2 0 0 0 1.414-.586l1.828-1.828A2 2 0 0 0 22 13.672V10a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3.672a2 2 0 0 0 .586 1.414zM6.75 12a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M3.06 10.56 1.44 8.94A1.5 1.5 0 0 1 1 7.878V5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v2.379a1.5 1.5 0 0 1-.44 1.06l-1.62 1.622a1.5 1.5 0 0 1-1.061.439H4.12a1.5 1.5 0 0 1-1.06-.44M4.5 7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"
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
						d="M3.5 6h13A1.5 1.5 0 0 1 18 7.5v2.379a1.5 1.5 0 0 1-.44 1.06l-1.62 1.622a1.5 1.5 0 0 1-1.061.439H5.12a1.5 1.5 0 0 1-1.06-.44l-1.622-1.62A1.5 1.5 0 0 1 2 9.878V7.5A1.5 1.5 0 0 1 3.5 6m2 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHdmiFilled.iconName = "hdmi--filled";

export default IconHdmiFilled;
