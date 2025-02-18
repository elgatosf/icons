import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9 5.25A3.25 3.25 0 0 1 12.25 2h6.5A3.25 3.25 0 0 1 22 5.25v6.5A3.25 3.25 0 0 1 18.75 15h-.5c-.414 0-.747-.337-.783-.75A8.5 8.5 0 0 0 9.75 6.533C9.337 6.497 9 6.164 9 5.75z" />
					<path
						fillRule="evenodd"
						d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14M6.28 11.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06z"
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
					<path d="M10.5 2A2.5 2.5 0 0 0 8 4.5v1.056a.53.53 0 0 0 .46.515 6.5 6.5 0 0 1 5.47 5.468.53.53 0 0 0 .515.461H15.5A2.5 2.5 0 0 0 18 9.5v-5A2.5 2.5 0 0 0 15.5 2z" />
					<path
						fillRule="evenodd"
						d="M13 12.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M4.646 9.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconActionFilled.iconName = "action--filled";

export default IconActionFilled;
