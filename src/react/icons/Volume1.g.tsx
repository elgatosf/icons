import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
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
				d="M9.293 20.293 5 16H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2l4.293-4.293c.63-.63 1.707-.184 1.707.707v15.172c0 .89-1.077 1.337-1.707.707M5.62 14.5H3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2.621L9.5 5.62V18.38z"
				clipRule="evenodd"
			/>
			<path d="M14.536 8.464a.75.75 0 1 0-1.061 1.061 3.5 3.5 0 0 1 0 4.95.75.75 0 1 0 1.06 1.06 5 5 0 0 0 0-7.07" />
		</svg>
	);
};

IconVolume1.iconName = "volume1";

export default IconVolume1;
