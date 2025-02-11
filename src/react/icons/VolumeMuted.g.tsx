import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolumeMuted = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m5 16 4.293 4.293c.63.63 1.707.184 1.707-.707V4.414c0-.89-1.077-1.337-1.707-.707L5 8H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2zm-2-1.5h2.621L9.5 18.379V5.62L5.621 9.5H3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5"
						clipRule="evenodd"
					/>
					<path d="M14.22 14.72a.75.75 0 1 0 1.06 1.06L18 13.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L19.06 12l2.72-2.72a.75.75 0 0 0-1.06-1.06L18 10.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L16.94 12z" />
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
						d="M9 3.5a.5.5 0 0 0-.854-.354L4.293 7H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.293l3.853 3.854A.5.5 0 0 0 9 16.5zM4.854 7.854 8 4.707v10.586l-3.146-3.146A.5.5 0 0 0 4.5 12H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.5a.5.5 0 0 0 .354-.146"
						clipRule="evenodd"
					/>
					<path d="M12.146 7.146a.5.5 0 0 1 .708 0L15 9.293l2.146-2.147a.5.5 0 0 1 .708.708L15.707 10l2.147 2.146a.5.5 0 0 1-.708.708L15 10.707l-2.146 2.147a.5.5 0 0 1-.708-.708L14.293 10l-2.147-2.146a.5.5 0 0 1 0-.708" />
				</svg>
			);
	}
};

IconVolumeMuted.iconName = "volume-muted";

export default IconVolumeMuted;
