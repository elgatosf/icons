import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCompassFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="m15.243 8.758-4.594 1.891 2.702 2.702z" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-5.086-6.22c-.338.823.484 1.645 1.305 1.306l5.896-2.427a1 1 0 0 0 .544-.544l2.427-5.896c.339-.822-.483-1.644-1.305-1.305L9.886 9.34a1 1 0 0 0-.544.544z"
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
					<path d="m11.115 11.115-2.23-2.23 3.717-1.487z" />
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-4.036-3.314a.5.5 0 0 0-.65-.65l-5 2a.5.5 0 0 0-.278.278l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .278-.278z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCompassFilled.iconName = "compass--filled";

export default IconCompassFilled;
