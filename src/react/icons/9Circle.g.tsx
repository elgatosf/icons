import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const Icon9Circle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.802 16.154c2.552 0 3.18-2.046 3.18-4.3 0-2.157-.672-4.005-3.08-4.005-1.629 0-2.916 1.001-2.916 2.662 0 1.54 1.078 2.541 2.53 2.541.935 0 1.463-.297 1.892-.979-.022 1.122-.099 2.882-1.606 2.882-.968 0-1.122-.506-1.155-.913h-1.65c0 1.342 1.1 2.112 2.805 2.112m.121-7.172c.847 0 1.364.616 1.364 1.485 0 .913-.55 1.518-1.419 1.518-.847 0-1.342-.66-1.342-1.518 0-.89.473-1.485 1.397-1.485"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Icon9Circle.iconName = "9-circle";

export default Icon9Circle;
