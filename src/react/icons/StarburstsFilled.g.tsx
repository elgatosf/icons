import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStarburstsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.57 2.359c.333-.844 1.528-.844 1.86 0l.909 2.303 2.303.908c.844.333.844 1.527 0 1.86l-2.303.908-.909 2.303c-.332.844-1.527.844-1.86 0l-.908-2.303-2.303-.908c-.844-.333-.844-1.527 0-1.86l2.303-.909zM16.57 13.359c.333-.844 1.528-.844 1.86 0l.909 2.303 2.303.908c.844.333.844 1.527 0 1.86l-2.303.909-.909 2.302c-.332.844-1.527.844-1.86 0l-.908-2.302-2.303-.909c-.844-.333-.844-1.527 0-1.86l2.303-.909zM8.93 6.359c-.332-.844-1.527-.844-1.86 0L5.737 9.737 2.36 11.07c-.844.333-.844 1.527 0 1.86l3.378 1.333L7.07 17.64c.333.844 1.528.844 1.86 0l1.333-3.378 3.379-1.333c.844-.333.844-1.527 0-1.86l-3.379-1.333z" />
		</svg>
	);
};

IconStarburstsFilled.iconName = "starbursts--filled";

export default IconStarburstsFilled;
