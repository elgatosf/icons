import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftPowerpoint = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.25 3.25a8.6 8.6 0 0 1 2.324.313 9 9 0 0 1 2.09.878 8.4 8.4 0 0 1 1.768 1.368 9.2 9.2 0 0 1 1.367 1.767q.576.967.889 2.09Q22 10.79 22 12t-.312 2.324a9 9 0 0 1-.88 2.09 8.4 8.4 0 0 1-1.367 1.768 9.2 9.2 0 0 1-1.767 1.367 8.5 8.5 0 0 1-2.09.889 8.7 8.7 0 0 1-2.334.312 8.726 8.726 0 0 1-4.043-.986A8.853 8.853 0 0 1 6.072 17H2.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 2 16.17V7.83a.8.8 0 0 1 .244-.586A.8.8 0 0 1 2.83 7h3.242a8.77 8.77 0 0 1 3.125-2.754 8.703 8.703 0 0 1 4.053-.996m.625 1.28v6.845h6.846a7.4 7.4 0 0 0-.684-2.559 7.485 7.485 0 0 0-3.604-3.594 7.6 7.6 0 0 0-2.558-.693M9.49 10.837q0-.567-.185-.967a1.76 1.76 0 0 0-.528-.664 2.1 2.1 0 0 0-.78-.371 4.5 4.5 0 0 0-.977-.117H4.373v6.553h1.533v-2.286h1.035q.48 0 .928-.136.45-.137.82-.41.372-.274.577-.674a2.2 2.2 0 0 0 .224-.928m3.76 8.662q.977 0 1.885-.234a7 7 0 0 0 1.709-.684 8.2 8.2 0 0 0 1.484-1.064q.684-.616 1.182-1.387a8.2 8.2 0 0 0 .82-1.66 6.8 6.8 0 0 0 .39-1.856h-8.085V4.53A7.42 7.42 0 0 0 7.665 7h3.505a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v8.34a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H7.664q.537.596 1.172 1.055.635.46 1.357.79.723.333 1.485.489.761.156 1.572.166M6.844 9.998q.479 0 .761.186.285.185.284.703 0 .225-.098.361a.84.84 0 0 1-.264.234.9.9 0 0 1-.351.118l-.371.039h-.899V9.998z" />
		</svg>
	);
};

IconLogoMicrosoftPowerpoint.iconName = "logo-microsoft-powerpoint";

export default IconLogoMicrosoftPowerpoint;
