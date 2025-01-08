import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHelpFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M7.987 7.614l-.002.009a.5.5 0 0 1-.97-.244v-.002l.001-.003.002-.008.007-.025.024-.08A3.723 3.723 0 0 1 7.6 6.2C8.044 5.609 8.805 5 10.001 5c.864 0 1.622.29 2.166.834S13 7.136 13 8c0 1.241-.797 1.878-1.402 2.362l-.036.028c-.641.514-1.062.876-1.062 1.61a.5.5 0 0 1-1 0c0-1.242.797-1.878 1.402-2.362l.036-.028C11.579 9.096 12 8.734 12 8c0-.636-.21-1.128-.541-1.459S10.636 6 10 6c-.804 0-1.293.391-1.6.8a2.7 2.7 0 0 0-.413.814m2.763 6.636a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHelpFilled.iconName = "help--filled";

export default IconHelpFilled;
