import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPin = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m17.267 6.411-4.235-4.013c-.956-.905-2.532-.228-2.532 1.09V6A1.5 1.5 0 0 1 9 7.5H6.121c-1.336 0-2.005 1.616-1.06 2.56l4.878 4.88c.945.944 2.561.275 2.561-1.061V10.5A1.5 1.5 0 0 1 14 9h2.2359999999999998c1.356 0 2.016-1.656 1.031-2.589M7 13l-3.5 3.5"
					/>
				</svg>
			);
	}
};

IconPin.iconName = "pin";

export default IconPin;
