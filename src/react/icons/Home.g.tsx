import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHome = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
						d="M16 15.5V7.73a.5.5 0 0 0-.191-.394l-5.5-4.322a.5.5 0 0 0-.618 0l-5.5 4.322A.5.5 0 0 0 4 7.729V15.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-4A1.5 1.5 0 0 1 9.5 10h1a1.5 1.5 0 0 1 1.5 1.5v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5M3.573 6.55A1.5 1.5 0 0 0 3 7.73v7.77A1.5 1.5 0 0 0 4.5 17h3A1.5 1.5 0 0 0 9 15.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V7.73a1.5 1.5 0 0 0-.573-1.18l-5.5-4.322a1.5 1.5 0 0 0-1.854 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHome.iconName = "home";

export default IconHome;
