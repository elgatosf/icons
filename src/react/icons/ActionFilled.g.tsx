import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
};

IconActionFilled.iconName = "action--filled";

export default IconActionFilled;
