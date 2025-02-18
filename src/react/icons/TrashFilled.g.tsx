import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTrashFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 1.25A3.75 3.75 0 0 0 8.25 5h-4.5a.75.75 0 0 0 0 1.5h1.338l.801 13.617A2 2 0 0 0 7.886 22h8.228a2 2 0 0 0 1.997-1.883l.8-13.617h1.339a.75.75 0 0 0 0-1.5h-4.5A3.75 3.75 0 0 0 12 1.25M14.25 5a2.25 2.25 0 0 0-4.5 0zm-4 3a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 .75-.75m4.25.75a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0z"
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
						d="M7 4V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h4.5a.5.5 0 0 1 0 1h-1.537l-.858 11.153A2 2 0 0 1 13.111 18H6.889a2 2 0 0 1-1.994-1.847L4.037 5H2.5a.5.5 0 0 1 0-1zm1-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H8zm1 4.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5-.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconTrashFilled.iconName = "trash--filled";

export default IconTrashFilled;
