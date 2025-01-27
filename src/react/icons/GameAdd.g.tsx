import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGameAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 15h2.498c.226-.54.522-1.045.878-1.5H8.25l-2.586 3.449a1.379 1.379 0 0 1-2.451-1.116l1.915-8.938a.5.5 0 0 1 .489-.395h12.766a.5.5 0 0 1 .49.395l.972 4.54c.64.248 1.23.594 1.752 1.019L20.34 6.58A2 2 0 0 0 18.383 5H5.617A2 2 0 0 0 3.66 6.58l-1.915 8.938a2.879 2.879 0 0 0 5.118 2.33z" />
			<path d="M15.364 11.359a6.5 6.5 0 0 1 1.744-.347 1.5 1.5 0 1 0-1.743.347M8 7.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 1 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75H6.5a.75.75 0 0 1 0-1.5h.75V8.5A.75.75 0 0 1 8 7.75" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconGameAdd.iconName = "game-add";

export default IconGameAdd;
