import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowTopLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.8536 14.8536C14.6583 15.0488 14.3417 15.0488 14.1464 14.8536L6 6.70711L6 12C6 12.2761 5.77614 12.5 5.5 12.5C5.22386 12.5 5 12.2761 5 12L5 5.5C5 5.22386 5.22386 5 5.5 5L12 5C12.2761 5 12.5 5.22386 12.5 5.5C12.5 5.77614 12.2761 6 12 6L6.70711 6L14.8536 14.1464C15.0488 14.3417 15.0488 14.6583 14.8536 14.8536Z"
			/>
		</svg>
	);
};

IconArrowTopLeft.iconName = "arrow-top-left";

export default IconArrowTopLeft;
