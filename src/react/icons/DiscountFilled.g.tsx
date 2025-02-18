import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDiscountFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M13.41 2.582a2 2 0 0 0-2.82 0L9.408 3.757a2 2 0 0 1-1.404.581l-1.667.005a2 2 0 0 0-1.994 1.994l-.005 1.667a2 2 0 0 1-.581 1.404L2.582 10.59a2 2 0 0 0 0 2.82l1.175 1.182a2 2 0 0 1 .581 1.404l.005 1.667a2 2 0 0 0 1.994 1.994l1.667.005a2 2 0 0 1 1.404.581l1.182 1.175a2 2 0 0 0 2.82 0l1.182-1.175a2 2 0 0 1 1.404-.581l1.667-.005a2 2 0 0 0 1.994-1.994l.005-1.667a2 2 0 0 1 .581-1.404l1.175-1.182a2 2 0 0 0 0-2.82l-1.175-1.182a2 2 0 0 1-.581-1.404l-.005-1.667a2 2 0 0 0-1.994-1.994l-1.667-.005a2 2 0 0 1-1.404-.581zm2.37 6.698a.75.75 0 0 0-1.06-1.06l-6.5 6.5a.75.75 0 1 0 1.06 1.06zM11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
						d="M3.414 8.1A2 2 0 0 0 4 6.687V6a2 2 0 0 1 2-2h.686a2 2 0 0 0 1.415-.586l.485-.485a2 2 0 0 1 2.828 0l.486.485A2 2 0 0 0 13.314 4H14a2 2 0 0 1 2 2v.686a2 2 0 0 0 .586 1.414l.485.486a2 2 0 0 1 0 2.828l-.485.486A2 2 0 0 0 16 13.314V14a2 2 0 0 1-2 2h-.686a2 2 0 0 0-1.415.586l-.485.485a2 2 0 0 1-2.828 0l-.486-.485A2 2 0 0 0 6.687 16H6a2 2 0 0 1-2-2v-.686a2 2 0 0 0-.586-1.415l-.485-.485a2 2 0 0 1 0-2.828zm9.44-.246a.5.5 0 1 0-.708-.708l-5 5a.5.5 0 0 0 .708.708zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconDiscountFilled.iconName = "discount--filled";

export default IconDiscountFilled;
