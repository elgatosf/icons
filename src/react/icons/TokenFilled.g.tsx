import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTokenFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M9 2.494a2 2 0 0 1 2 0l5 2.887a2 2 0 0 1 .427.33l-4.115 2.377A3 3 0 0 0 10 7c-.93 0-1.761.423-2.312 1.088L3.573 5.712Q3.76 5.519 4 5.38zM3.073 6.578A2 2 0 0 0 3 7.113v5.774a2 2 0 0 0 1 1.732l5 2.886q.24.138.5.205v-4.752a3 3 0 0 1-2.312-4.005zM12.812 8.953l4.115-2.375q.072.26.073.535v5.774a2 2 0 0 1-1 1.732l-5 2.886a2 2 0 0 1-.5.205v-4.752a3 3 0 0 0 2.312-4.005" />
					<path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
				</svg>
			);
	}
};

IconTokenFilled.iconName = "token--filled";

export default IconTokenFilled;
