import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEthernetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M15 4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1l-1.414 1.414a2 2 0 0 1-1.414.586H8.828a2 2 0 0 1-1.414-.586L6 15H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM5.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconEthernetFilled.iconName = "ethernet--filled";

export default IconEthernetFilled;
