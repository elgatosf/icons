import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber2 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.654 17.187H8.346v-1.666c1.372-1.092 5.096-3.906 5.096-5.81 0-.868-.546-1.414-1.358-1.414-.91 0-1.428.63-1.456 1.568H8.514c.042-2.198 1.806-3.052 3.668-3.052 1.666 0 3.416.882 3.416 2.814 0 2.422-3.192 4.592-4.802 6.02h4.858z" />
		</svg>
	);
};

IconNumber2.iconName = "number2";

export default IconNumber2;
