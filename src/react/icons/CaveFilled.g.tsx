import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCaveFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.433 9.338a.75.75 0 0 1-1.057.825l-2.305-1.09a.75.75 0 1 0-.642 1.355l5.327 2.52a2 2 0 0 1 1.085 1.323l1.307 5.229h1.102a.75.75 0 0 1 0 1.5h-5.366a2 2 0 0 1-1.886-1.334l-1.05-2.978a.5.5 0 0 0-.224-.268l-2.168-1.238a.5.5 0 0 0-.638.121l-1.168 1.46a.5.5 0 0 0-.093.184l-.685 2.568A2 2 0 0 1 7.04 21H1.75a.75.75 0 1 1 0-1.5h1.08l1.362-7.258a2 2 0 0 1 .551-1.046l3.045-3.045a.5.5 0 0 0 .111-.168l1.419-3.546a2 2 0 0 1 2.684-1.078l3.726 1.693a2 2 0 0 1 1.133 1.429z" />
		</svg>
	);
};

IconCaveFilled.iconName = "cave--filled";

export default IconCaveFilled;
