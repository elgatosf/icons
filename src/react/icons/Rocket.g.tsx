import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconRocket = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.126 7.427A15.08 15.08 0 0 1 20.712 2C21.424 2 22 2.576 22 3.287a15.08 15.08 0 0 1-5.427 11.586l-.573.478v4.267c0 .48-.23.93-.618 1.213l-1.697 1.235a1.5 1.5 0 0 1-2.248-.593L9.862 18.01a.75.75 0 1 1 1.365-.621l1.575 3.465 1.698-1.235V15a.75.75 0 0 1 .27-.576l.843-.703a13.58 13.58 0 0 0 4.885-10.22 13.58 13.58 0 0 0-10.22 4.886l-.702.843A.75.75 0 0 1 9 9.5H4.382l-1.235 1.698 3.465 1.575a.75.75 0 1 1-.62 1.365l-3.466-1.575a1.5 1.5 0 0 1-.592-2.248L3.17 8.618A1.5 1.5 0 0 1 4.382 8h4.267z" />
			<path d="M11.78 13.28a.75.75 0 1 0-1.06-1.06l-5.5 5.5a.75.75 0 1 0 1.06 1.06z" />
		</svg>
	);
};

IconRocket.iconName = "rocket";

export default IconRocket;
