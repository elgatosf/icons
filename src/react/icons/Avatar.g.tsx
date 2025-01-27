import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAvatar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M13 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1c1.79 0 3.424-.672 4.661-1.778a6 6 0 0 0-9.322 0A6.97 6.97 0 0 0 10 17m3.102-4.275a7 7 0 0 1 2.26 1.775 7 7 0 1 0-10.724 0 7 7 0 0 1 8.464-1.775"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAvatar.iconName = "avatar";

export default IconAvatar;
