import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMarginYSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 19a2 2 0 0 0 2 2h7.022a6.5 6.5 0 0 1-.709-1.5H5a.5.5 0 0 1-.5-.5v-1.5H11q.002-.776.174-1.5H4.5V8h15v3.313a6.5 6.5 0 0 1 1.5.709V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM4.5 6.5h15V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M19.5 15a.5.5 0 0 1 .5.5v2.828a.5.5 0 0 1-1 0v-1.621l-3.146 3.147a.5.5 0 1 1-.708-.707L18.293 16h-1.621a.5.5 0 1 1 0-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMarginYSet.iconName = "margin-y-set";

export default IconMarginYSet;
