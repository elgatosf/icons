import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconToken = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4 6.226a2 2 0 0 0-1 1.732v8.083a2 2 0 0 0 1 1.732l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.958a2 2 0 0 0-1-1.732l-7-4.041a2 2 0 0 0-2 0zm4.972 3.16L5.25 7.236l6.5-3.752a.5.5 0 0 1 .5 0l6.5 3.753-3.722 2.149A3.99 3.99 0 0 0 12 8a3.99 3.99 0 0 0-3.028 1.386m6.807 1.298a4.001 4.001 0 0 1-3.029 5.246v4.297l6.5-3.753a.5.5 0 0 0 .25-.433V8.536zM11.25 15.93v4.297l-6.5-3.753a.5.5 0 0 1-.25-.433V8.536l3.721 2.148a4.001 4.001 0 0 0 3.029 5.246M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
						d="M11 2.494a2 2 0 0 0-2 0L4 5.381a2 2 0 0 0-1 1.732v5.774a2 2 0 0 0 1 1.732l5 2.886a2 2 0 0 0 2 0l5-2.886a2 2 0 0 0 1-1.732V7.113a2 2 0 0 0-1-1.732zm4.5 3.753-5-2.887a1 1 0 0 0-1 0l-5 2.887 3.188 1.84A3 3 0 0 1 10 7c.93 0 1.761.423 2.312 1.088zM7.188 8.953 4 7.113v5.774a1 1 0 0 0 .5.866l5 2.886v-3.68a3 3 0 0 1-2.312-4.006M13 10c0-.368-.066-.72-.188-1.047L16 7.113v5.774a1 1 0 0 1-.5.866l-5 2.886v-3.68a3 3 0 0 0 2.5-2.96m-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconToken.iconName = "token";

export default IconToken;
