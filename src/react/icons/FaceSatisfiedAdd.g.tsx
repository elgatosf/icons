import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFaceSatisfiedAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M22 12q0 .395-.03.78a6.5 6.5 0 0 0-1.474-1.05 8.5 8.5 0 1 0-8.766 8.766c.281.54.636 1.036 1.05 1.474q-.385.03-.78.03C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
			<path d="M11.027 16.904c.046-.508.15-1 .308-1.468a3.5 3.5 0 0 1-2-1.168.75.75 0 1 0-1.143.972 5 5 0 0 0 2.835 1.664M10 10.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M16.5 10.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFaceSatisfiedAdd.iconName = "face-satisfied-add";

export default IconFaceSatisfiedAdd;
