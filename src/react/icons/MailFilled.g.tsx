import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMailFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21.84 5.219c.103.24.16.504.16.781v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-.277.056-.541.158-.781l9.312 9.311a.75.75 0 0 0 1.06 0z" />
					<path d="M20 4c.277 0 .54.056.78.158L12 12.94 3.219 4.158C3.459 4.056 3.723 4 4 4z" />
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
					<path d="M17.72 4.985c.177.298.28.644.28 1.015v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-.37.103-.717.278-1.015l7.368 7.369a.5.5 0 0 0 .707 0z" />
					<path d="M16 4c.37 0 .716.103 1.014.278L10 11.293 2.985 4.278A2 2 0 0 1 4 4z" />
				</svg>
			);
	}
};

IconMailFilled.iconName = "mail--filled";

export default IconMailFilled;
