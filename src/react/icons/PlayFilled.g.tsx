import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlayFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M20 10.268C21.3333 11.0378 21.3333 12.9623 20 13.7321L8 20.6603C6.66667 21.4301 5 20.4678 5 18.9282L5 5.07183C5 3.53223 6.66667 2.56998 8 3.33978L20 10.268Z" />
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
					<path d="M16 8.26787C17.3333 9.03767 17.3333 10.9622 16 11.732L7 16.9281C5.66667 17.6979 4 16.7357 4 15.1961L4 4.80377C4 3.26417 5.66667 2.30191 7 3.07171L16 8.26787Z" />
				</svg>
			);
	}
};

IconPlayFilled.iconName = "play--filled";

export default IconPlayFilled;
