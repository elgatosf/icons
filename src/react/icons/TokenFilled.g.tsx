import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTokenFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.77 6.382q.108-.086.23-.156l7-4.041a2 2 0 0 1 2 0l7 4.041a2 2 0 0 1 .23.156l-5.202 3.004A3.99 3.99 0 0 0 12 8a3.99 3.99 0 0 0-3.028 1.386zM16 12c0 1.953-1.4 3.579-3.25 3.93v6.007q.128-.052.25-.122l7-4.042a2 2 0 0 0 1-1.732V7.958q0-.14-.02-.277l-5.201 3.003c.143.412.221.855.221 1.316M8 12c0-.46.078-.904.221-1.316L3.02 7.681q-.018.137-.019.277v8.083a2 2 0 0 0 1 1.732l7 4.042q.122.07.25.122V15.93A4 4 0 0 1 8 12" />
			<path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
		</svg>
	);
};

IconTokenFilled.iconName = "token--filled";

export default IconTokenFilled;
