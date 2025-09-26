import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShutter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3.004-2.046A8.53 8.53 0 0 0 18.874 17h-6.823zm.568-4.454h4.176A8.5 8.5 0 0 0 20.5 12q0-.676-.103-1.325zm-2.121 0h-2.9L8.5 13.45v-2.9l2.05-2.05h2.9l2.05 2.05v2.9zm2.05-7.071-4.826-4.826a8.56 8.56 0 0 1 4.826.65zM8.997 4.046A8.53 8.53 0 0 0 5.125 7h6.826zm10.957 4.95a8.52 8.52 0 0 0-2.953-3.87v6.824zm-6.628 11.401A8.6 8.6 0 0 1 12 20.5a8.5 8.5 0 0 1-3.5-.751V15.57zm-9.28-5.393L7 12.05v6.825a8.53 8.53 0 0 1-2.954-3.87m-.443-1.678L8.429 8.5H4.252a8.564 8.564 0 0 0-.649 4.826"
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
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m2.353-1.405A7 7 0 0 0 15.745 14H9.758zM12.658 13h3.668a7.047 7.047 0 0 0 .565-4.234zm-1.415 0H8.758L7 11.242V8.757L8.757 7h2.487L13 8.757v2.485zm1.758-5.657L8.766 3.108a7.04 7.04 0 0 1 4.235.566zM7.649 3.405 10.244 6h-5.99A7 7 0 0 1 7.65 3.405m8.946 4.243a7 7 0 0 0-2.594-3.393v5.987zm-5.36 9.243A7.05 7.05 0 0 1 7 16.327v-3.67zm-7.83-4.539L6 9.757v5.989a7 7 0 0 1-2.595-3.394m-.296-1.118L7.342 7h-3.67a7.042 7.042 0 0 0-.565 4.234"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconShutter.iconName = "shutter";

export default IconShutter;
