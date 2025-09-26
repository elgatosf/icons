import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCursor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M19.304 9.535 5.002 4.362a.5.5 0 0 0-.64.64l5.173 14.302a.5.5 0 0 0 .94 0l1.797-4.94a3.5 3.5 0 0 1 2.093-2.093l4.94-1.796a.5.5 0 0 0 0-.94M5.513 2.95l14.301 5.173c1.758.636 1.76 3.122.004 3.76l-4.94 1.797a2 2 0 0 0-1.197 1.196l-1.796 4.94c-.639 1.757-3.125 1.755-3.76-.003L2.952 5.512c-.577-1.594.967-3.137 2.56-2.56"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCursor.iconName = "cursor";

export default IconCursor;
