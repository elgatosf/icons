import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
					<path
						fillRule="evenodd"
						d="M5.54 4.34C5.832 4.102 6.2 4 6.574 4h10.852c.375 0 .743.103 1.034.34C19.51 5.19 22 7.661 22 12s-2.489 6.81-3.54 7.66c-.291.236-.659.34-1.034.34H6.574c-.375 0-.742-.104-1.034-.34C4.49 18.81 2 16.339 2 12s2.489-6.81 3.54-7.66M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-7.75-4.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
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
					<path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
					<path
						fillRule="evenodd"
						d="M3.625 4.846c.373-.53.98-.846 1.629-.846h9.488a1.99 1.99 0 0 1 1.627.844 8.955 8.955 0 0 1 0 10.312 1.99 1.99 0 0 1-1.627.844H5.254a1.99 1.99 0 0 1-1.629-.846 8.96 8.96 0 0 1 0-10.308M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3.5 9a.5.5 0 0 0 0 1H5a.5.5 0 0 0 0-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFacecamFilled.iconName = "facecam--filled";

export default IconFacecamFilled;
