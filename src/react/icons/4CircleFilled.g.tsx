import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon4CircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m12.55 9.323-2.552 3.84h2.53z" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10.268 11.273h-1.222V16h-1.54v-1.727H8.855v-1.43l3.29-4.796h1.902v5.104h1.222z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Icon4CircleFilled.iconName = "4-circle--filled";

export default Icon4CircleFilled;
