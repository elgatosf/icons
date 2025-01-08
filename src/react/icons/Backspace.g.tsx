import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBackspace = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.78 8.22a.75.75 0 0 1 0 1.06L15.06 12l2.72 2.72a.75.75 0 1 1-1.06 1.06L14 13.06l-2.72 2.72a.75.75 0 1 1-1.06-1.06L12.94 12l-2.72-2.72a.75.75 0 1 1 1.06-1.06L14 10.94l2.72-2.72a.75.75 0 0 1 1.06 0" />
			<path
				fillRule="evenodd"
				d="M8.408 4a2 2 0 0 0-1.506.683l-5.25 6a2 2 0 0 0 0 2.634l5.25 6A2 2 0 0 0 8.408 20H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM20 5.5H8.408a.5.5 0 0 0-.377.17l-5.25 6a.5.5 0 0 0 0 .66l5.25 6a.5.5 0 0 0 .377.17H20a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBackspace.iconName = "backspace";

export default IconBackspace;
