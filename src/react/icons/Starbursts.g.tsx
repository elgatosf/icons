import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconStarbursts = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="m15.662 4.662-2.303.908c-.844.333-.844 1.527 0 1.86l2.303.908.908 2.303c.333.844 1.527.844 1.86 0l.909-2.303 2.303-.908c.844-.333.844-1.527 0-1.86l-2.303-.909-.909-2.302c-.332-.844-1.527-.844-1.86 0zm2.52 1.156-.682-1.73-.682 1.73-1.73.682 1.73.682.682 1.73.682-1.73 1.73-.682zm-2.52 9.844-2.303.908c-.844.333-.844 1.527 0 1.86l2.303.909.908 2.302c.333.844 1.527.844 1.86 0l.909-2.302 2.303-.909c.844-.333.844-1.527 0-1.86l-2.303-.909-.909-2.302c-.332-.844-1.527-.844-1.86 0zm2.52 1.156-.682-1.73-.682 1.73-1.73.682 1.73.682.682 1.73.682-1.73 1.73-.682zM2.359 11.07l3.378-1.333L7.07 6.36c.333-.844 1.528-.844 1.86 0l1.333 3.378 3.379 1.333c.844.333.844 1.527 0 1.86l-3.379 1.333L8.93 17.64c-.332.844-1.527.844-1.86 0l-1.333-3.378L2.36 12.93c-.844-.333-.844-1.527 0-1.86Zm6.748-.176L11.912 12l-2.805 1.106L8 15.912l-1.106-2.806L4.089 12l2.805-1.106L8 8.088z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStarbursts.iconName = "starbursts";

export default IconStarbursts;
