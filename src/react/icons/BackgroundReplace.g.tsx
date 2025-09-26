import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBackgroundReplace = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-.999 1 .5.5 0 0 0 .001 1A2 2 0 0 0 18 12V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 1.998 2 .5.5 0 0 0 0-1A1 1 0 0 1 3 12z" />
			<path
				fillRule="evenodd"
				d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 16a5 5 0 0 1 10 0 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m2 1a1 1 0 0 1-1-1 4 4 0 0 1 8 0 1 1 0 0 1-1 1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBackgroundReplace.iconName = "background-replace";

export default IconBackgroundReplace;
