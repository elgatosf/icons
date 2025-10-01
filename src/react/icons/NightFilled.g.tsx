import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M20.8671 13.5451C21.01 12.7211 20.0124 12.2573 19.2364 12.5692C18.5453 12.847 17.7905 12.9998 17 12.9998C13.6863 12.9998 11 10.3135 11 6.99984C11 6.20941 11.1528 5.45467 11.4306 4.76358C11.7424 3.98764 11.2786 2.99005 10.4546 3.13292C8.68983 3.43892 6.99879 4.27329 5.63604 5.63605C2.12132 9.15077 2.12132 14.8493 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C19.7268 17.0011 20.5612 15.31 20.8671 13.5451Z" />
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.91797 3.08286C9.23315 3.03397 9.55276 3.13859 9.77832 3.36411C10.0039 3.58965 10.1084 3.90928 10.0596 4.22446C10.0205 4.47617 10 4.7353 10 4.99985C10 7.76128 12.2386 9.99985 15 9.99985C15.262 9.99985 15.5205 9.97872 15.7744 9.9393C16.0896 9.89041 16.4092 9.99503 16.6348 10.2206C16.8603 10.4461 16.9649 10.7657 16.916 11.0809C16.3955 14.4335 13.499 16.9999 10 16.9999C6.13401 16.9999 3 13.8658 3 9.99985C3.00005 6.50151 5.5656 3.60376 8.91797 3.08286Z"
					/>
				</svg>
			);
	}
};

IconNightFilled.iconName = "night--filled";

export default IconNightFilled;
