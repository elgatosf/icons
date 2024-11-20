import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconVolume1 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M9.293 19.293 6 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707M7.06 14.939A1.5 1.5 0 0 0 6 14.5H4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.438L9.5 6.62v10.76z"
				clipRule="evenodd"
			/>
			<path d="M13.828 9.171a.75.75 0 1 0-1.06 1.061 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.657" />
		</svg>
	);
};

IconVolume1.iconName = "volume-1";

export default IconVolume1;
