import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVerified = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.78 10.28a.75.75 0 0 0-1.06-1.06l-3.97 3.97-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" />
					<path
						fillRule="evenodd"
						d="m19.25 7.525-7-4.041a.5.5 0 0 0-.5 0l-7 4.041a.5.5 0 0 0-.25.433v8.083a.5.5 0 0 0 .25.433l7 4.042a.5.5 0 0 0 .5 0l7-4.042a.5.5 0 0 0 .25-.433V7.958a.5.5 0 0 0-.25-.433M13 2.185a2 2 0 0 0-2 0L4 6.226a2 2 0 0 0-1 1.732v8.083a2 2 0 0 0 1 1.732l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.958a2 2 0 0 0-1-1.732z"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M10.854 6.147a.5.5 0 0 1 0 .707l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.707L7 9.293l3.146-3.146a.5.5 0 0 1 .708 0" />
					<path
						fillRule="evenodd"
						d="M7.333 1.457c.413-.238.921-.238 1.334 0l4.666 2.694c.413.238.667.679.667 1.155v5.389c0 .476-.254.916-.667 1.154l-4.666 2.695c-.413.238-.921.238-1.334 0l-4.666-2.695A1.33 1.33 0 0 1 2 10.695v-5.39c0-.475.254-.916.667-1.154zm.834.866 4.666 2.694c.104.06.167.17.167.289v5.389c0 .119-.063.229-.167.288l-4.666 2.694a.33.33 0 0 1-.334 0l-4.666-2.694A.33.33 0 0 1 3 10.695v-5.39c0-.118.064-.228.167-.288l4.666-2.694c.103-.06.23-.06.334 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconVerified.iconName = "verified";

export default IconVerified;
