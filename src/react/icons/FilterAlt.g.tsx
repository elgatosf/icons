import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFilterAlt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M9.997 11.212a1.5 1.5 0 0 1 .503 1.121v4.73a.5.5 0 0 0 .18.384l2.82 2.35v-7.464a1.5 1.5 0 0 1 .504-1.12l5.328-4.737a.5.5 0 0 0 .168-.374V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v1.102a.5.5 0 0 0 .168.374zM15 12.333l5.329-4.736A2 2 0 0 0 21 6.102V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.102a2 2 0 0 0 .671 1.495L9 12.333v4.73a2 2 0 0 0 .72 1.537l3.64 3.033a1 1 0 0 0 1.64-.768z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFilterAlt.iconName = "filter-alt";

export default IconFilterAlt;
