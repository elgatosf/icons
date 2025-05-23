import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBugFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.25 2a.75.75 0 0 1 .75.75v1.591A6 6 0 0 1 12 4c.701 0 1.375.12 2 .341v-1.59a.75.75 0 0 1 1.5 0v2.375A6 6 0 0 1 17.456 7.5h2.796a.75.75 0 0 1 0 1.5H3.747a.75.75 0 0 1 0-1.5h2.797A6 6 0 0 1 8.5 5.126V2.751A.75.75 0 0 1 9.25 2M2.997 12.25a.75.75 0 0 1 .75-.75H6v-1h5.25v10.454A6.01 6.01 0 0 1 6.342 17H3.766a.75.75 0 0 1 0-1.5h2.255A6 6 0 0 1 6 15v-2H3.746a.75.75 0 0 1-.75-.75M12.75 10.5H18v1h2.25a.75.75 0 0 1 0 1.5H18v2q0 .252-.02.5h2.27a.75.75 0 0 1 0 1.5H17.66a6.01 6.01 0 0 1-4.909 3.954z" />
		</svg>
	);
};

IconBugFilled.iconName = "bug--filled";

export default IconBugFilled;
