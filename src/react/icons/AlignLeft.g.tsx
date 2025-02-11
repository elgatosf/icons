import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0z" />
					<path
						fillRule="evenodd"
						d="M8 6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm11 1.5H8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5M6 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"
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
						d="M18 6.5A1.5 1.5 0 0 0 16.5 5h-10A1.5 1.5 0 0 0 5 6.5v1A1.5 1.5 0 0 0 6.5 9h10A1.5 1.5 0 0 0 18 7.5zm-1 1v-1a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5"
						clipRule="evenodd"
					/>
					<path d="M2.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5" />
					<path
						fillRule="evenodd"
						d="M12.5 11a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 13.5v-1A1.5 1.5 0 0 1 6.5 11zm.5 1.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAlignLeft.iconName = "align-left";

export default IconAlignLeft;
