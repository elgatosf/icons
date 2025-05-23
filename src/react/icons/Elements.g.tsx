import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconElements = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10 5.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5M20 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M5.75 7a.75.75 0 0 0-.75.75V15a2 2 0 0 0 2 2h11.25a.75.75 0 0 0 0-1.5H7a.5.5 0 0 1-.5-.5V7.75A.75.75 0 0 0 5.75 7"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M2.75 10a.75.75 0 0 0-.75.75V18a2 2 0 0 0 2 2h11.25a.75.75 0 0 0 0-1.5H4a.5.5 0 0 1-.5-.5v-7.25a.75.75 0 0 0-.75-.75"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconElements.iconName = "elements";

export default IconElements;
