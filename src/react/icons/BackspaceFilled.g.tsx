import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBackspaceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.902 4.683A2 2 0 0 1 8.408 4H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8.408a2 2 0 0 1-1.506-.683l-5.25-6a2 2 0 0 1 0-2.634zM17.78 8.22a.75.75 0 0 1 0 1.06L15.06 12l2.72 2.72a.75.75 0 1 1-1.06 1.06L14 13.06l-2.72 2.72a.75.75 0 1 1-1.06-1.06L12.94 12l-2.72-2.72a.75.75 0 1 1 1.06-1.06L14 10.94l2.72-2.72a.75.75 0 0 1 1.06 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBackspaceFilled.iconName = "backspace--filled";

export default IconBackspaceFilled;
