import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconViewFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.50002 13.3807 9.50002 12C9.50002 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 5C6.82759 5 3.49949 9.23662 2.27658 11.118C1.92465 11.6594 1.92465 12.3406 2.27658 12.882C3.49949 14.7634 6.82759 19 12 19C17.1724 19 20.5006 14.7634 21.7235 12.882C22.0754 12.3406 22.0754 11.6594 21.7235 11.118C20.5006 9.23662 17.1724 5 12 5ZM16 12C16 14.2091 14.2092 16 12 16C9.79088 16 8.00002 14.2091 8.00002 12C8.00002 9.79086 9.79088 8 12 8C14.2092 8 16 9.79086 16 12Z"
					/>
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
					<path d="M12 10C12 11.1046 11.1046 12 10 12C8.89544 12 8.00001 11.1046 8.00001 10C8.00001 8.89543 8.89544 8 10 8C11.1046 8 12 8.89543 12 10Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M1.77382 9.34346C1.5878 9.76132 1.5878 10.2387 1.77382 10.6565C3.17539 13.8049 6.33136 16 10 16C13.6687 16 16.8246 13.8049 18.2262 10.6565C18.4122 10.2387 18.4122 9.76133 18.2262 9.34346C16.8246 6.19506 13.6687 4 10 4C6.33136 4 3.17539 6.19506 1.77382 9.34346ZM13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7.00001 11.6569 7.00001 10C7.00001 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
					/>
				</svg>
			);
	}
};

IconViewFilled.iconName = "view--filled";

export default IconViewFilled;
