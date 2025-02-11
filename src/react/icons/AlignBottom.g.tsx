import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignBottom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2zM7.5 5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5"
						clipRule="evenodd"
					/>
					<path d="M3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z" />
					<path
						fillRule="evenodd"
						d="M15 18a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-.5-2v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
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
						d="M6.5 2A1.5 1.5 0 0 0 5 3.5v10A1.5 1.5 0 0 0 6.5 15h1A1.5 1.5 0 0 0 9 13.5v-10A1.5 1.5 0 0 0 7.5 2zm1 1h-1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5"
						clipRule="evenodd"
					/>
					<path d="M2 17.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5" />
					<path
						fillRule="evenodd"
						d="M11 7.5A1.5 1.5 0 0 1 12.5 6h1A1.5 1.5 0 0 1 15 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAlignBottom.iconName = "align-bottom";

export default IconAlignBottom;
