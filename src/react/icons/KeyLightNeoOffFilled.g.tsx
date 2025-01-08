import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightNeoOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 20.72a.75.75 0 1 0 1.06 1.06l2.368-2.368q.041.023.082.043c.37.188.778.311 1.27.392V21a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.153c.492-.08.9-.204 1.27-.392a5 5 0 0 0 2.185-2.185C21 16.2 21 14.8 21 12v-2c0-2.8 0-4.2-.545-5.27l-.043-.082L21.78 3.28a.75.75 0 0 0-1.06-1.06zM12 17a5.97 5.97 0 0 1-3.086-.853l1.105-1.105a4.5 4.5 0 0 0 6.023-6.023l1.105-1.105C17.688 8.816 18 9.871 18 11c0 1.386-.47 2.663-1.26 3.68l1.04 1.04a.75.75 0 1 1-1.06 1.06l-1.04-1.04A5.97 5.97 0 0 1 12 17m-3.5 4v-1.024C9.189 20 10.006 20 11 20h2c.994 0 1.811 0 2.5-.024V21a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5"
				clipRule="evenodd"
			/>
			<path d="m3.547 17.274 3.262-3.263A5.97 5.97 0 0 1 6 11c0-1.387.47-2.663 1.26-3.68L6.22 6.28a.75.75 0 0 1 1.06-1.06l1.04 1.04A5.97 5.97 0 0 1 12 5c1.098 0 2.126.295 3.012.81l3.262-3.263-.004-.002C17.2 2 15.8 2 13 2h-2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 4.73C3 5.8 3 7.2 3 10v2c0 2.8 0 4.2.545 5.27z" />
			<path d="m7.92 12.9 5.98-5.98a4.5 4.5 0 0 0-5.98 5.98" />
		</svg>
	);
};

IconKeyLightNeoOffFilled.iconName = "key-light-neo-off--filled";

export default IconKeyLightNeoOffFilled;
