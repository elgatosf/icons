import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m8.684 7.463-5.41.786a1 1 0 0 0-.553 1.706l3.914 3.815-.924 5.388a1 1 0 0 0 1.45 1.054l4.84-2.544 4.837 2.544a1 1 0 0 0 1.451-1.054l-.924-5.388 3.915-3.815a1 1 0 0 0-.555-1.706l-5.41-.786-2.418-4.902a1 1 0 0 0-1.794 0zm5.636 1.371L12 4.134l-2.32 4.7-5.187.754 3.754 3.659-.887 5.166 4.64-2.44 4.64 2.44-.886-5.166 3.753-3.66z"
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
						d="M9.215 2.375a1 1 0 0 1 1.65.116l2.042 3.508 3.968.859c.702.152 1.007.962.621 1.533l-.087.11-2.705 3.028.41 4.039a1 1 0 0 1-1.4 1.016L10 14.947l-3.715 1.637a1 1 0 0 1-1.398-1.016l.409-4.04-2.705-3.026a1 1 0 0 1 .534-1.644l3.968-.86 2.043-3.507zM7.957 6.502c-.124.212-.32.37-.552.447l-.1.027-3.969.86 2.705 3.027.067.08c.142.198.208.442.183.686l-.41 4.04 3.716-1.637.097-.037a1 1 0 0 1 .71.037l3.714 1.636-.409-4.039a1 1 0 0 1 .25-.766l2.705-3.027-3.969-.86a1 1 0 0 1-.652-.474L10 2.994z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconStar.iconName = "star";

export default IconStar;
