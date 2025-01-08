import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSync = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20 2.75a.75.75 0 0 0-1.5 0v3.025A9 9 0 0 0 3.05 11.067a.75.75 0 1 0 1.491.156A7.5 7.5 0 0 1 17.1 6.5h-2.35a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75zM9.64 19.119a7.5 7.5 0 0 0 9.82-6.342.75.75 0 0 1 1.492.156A9 9 0 0 1 5.5 18.225v2.025a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H5.993a1 1 0 0 1 .06.069 7.5 7.5 0 0 0 3.587 2.55" />
		</svg>
	);
};

IconSync.iconName = "sync";

export default IconSync;
