import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeartFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M7.5 3C4.46243 3 2 5.46243 2 8.5C2 14.6356 8.69245 19.098 11.1275 20.5186C11.6713 20.8358 12.3287 20.8358 12.8725 20.5186C15.3076 19.098 22 14.6356 22 8.5C22 5.46243 19.5376 3 16.5 3C14.6398 3 12.9954 3.92345 12 5.33692C11.0046 3.92345 9.36016 3 7.5 3Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M13.75 3C16.0972 3 18 4.90279 18 7.25C18 12.1444 12.2035 16.1332 10.4785 17.2119C10.1825 17.3969 9.81753 17.3969 9.52148 17.2119C7.79648 16.1332 2 12.1444 2 7.25C2 4.90279 3.90279 3 6.25 3C7.87369 3 9.28439 3.91071 10 5.24902C10.7156 3.91071 12.1263 3 13.75 3Z" />
				</svg>
			);
	}
};

IconHeartFilled.iconName = "heart--filled";

export default IconHeartFilled;
