import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M19.5 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0z" />
					<path
						fillRule="evenodd"
						d="M16 6a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM5 7.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5M18 15a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zm-2-.5h-6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5"
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
						d="M2 6.5A1.5 1.5 0 0 1 3.5 5h10A1.5 1.5 0 0 1 15 6.5v1A1.5 1.5 0 0 1 13.5 9h-10A1.5 1.5 0 0 1 2 7.5zm1 1v-1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5"
						clipRule="evenodd"
					/>
					<path d="M17.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5" />
					<path
						fillRule="evenodd"
						d="M7.5 11A1.5 1.5 0 0 0 6 12.5v1A1.5 1.5 0 0 0 7.5 15h6a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5zM7 12.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAlignRight.iconName = "align-right";

export default IconAlignRight;
