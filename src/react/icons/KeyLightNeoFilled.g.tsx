import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightNeoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" />
			<path
				fillRule="evenodd"
				d="M3 10c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 2.545C6.8 2 8.2 2 11 2h2c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C21 5.8 21 7.2 21 10v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.37.188-.778.311-1.27.392V21a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1.153c-.492-.08-.9-.204-1.27-.392a5 5 0 0 1-2.185-2.185C3 16.2 3 14.8 3 12zm5.5 9.976V21a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1.024C14.811 20 13.994 20 13 20h-2c-.994 0-1.811 0-2.5-.024M12 17c1.386 0 2.663-.47 3.68-1.26l1.04 1.04a.75.75 0 1 0 1.06-1.06l-1.04-1.04A5.97 5.97 0 0 0 18 11c0-1.387-.47-2.663-1.26-3.68l1.04-1.04a.75.75 0 0 0-1.06-1.06l-1.04 1.04A5.97 5.97 0 0 0 12 5c-1.386 0-2.663.47-3.68 1.26L7.28 5.22a.75.75 0 0 0-1.06 1.06l1.04 1.04A5.97 5.97 0 0 0 6 11c0 1.386.47 2.663 1.26 3.68l-1.04 1.04a.75.75 0 1 0 1.06 1.06l1.04-1.04A5.97 5.97 0 0 0 12 17"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightNeoFilled.iconName = "key-light-neo--filled";

export default IconKeyLightNeoFilled;
