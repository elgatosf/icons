import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShieldOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-2.67 2.67.861.479c.635.352 1.038 1.025.994 1.75-.496 8.203-6.09 12.194-8.182 13.407a1.55 1.55 0 0 1-1.566 0 17 17 0 0 1-4.223-3.52L3.28 21.78a.75.75 0 0 1-1.06 0m5.837-4.777a15.4 15.4 0 0 0 3.913 3.286c.018.01.027.01.03.01s.012 0 .03-.01c1.911-1.109 6.986-4.735 7.438-12.2.006-.1-.05-.252-.225-.35l-1.236-.686z"
				clipRule="evenodd"
			/>
			<path d="m5.226 15.595 1.102-1.102c-.935-1.715-1.64-3.832-1.796-6.405-.006-.1.05-.251.225-.348l7-3.89a.5.5 0 0 1 .486 0l3.039 1.69 1.103-1.104L12.97 2.54a2 2 0 0 0-1.942 0l-7 3.889c-.635.352-1.038 1.025-.994 1.75.183 3.019 1.056 5.467 2.19 7.416" />
		</svg>
	);
};

IconShieldOff.iconName = "shield-off";

export default IconShieldOff;
