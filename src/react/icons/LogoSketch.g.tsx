import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSketch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M1.262 9.24 5.67 3.256a.55.55 0 0 1 .382-.22l5.888-.654a.6.6 0 0 1 .121 0l5.888.654a.55.55 0 0 1 .382.22l4.41 5.984a.55.55 0 0 1-.028.686l-10.4 12.025a.412.412 0 0 1-.624 0L1.29 9.926a.55.55 0 0 1-.027-.686Zm12.255-5.09 4.158 3.928a.275.275 0 0 0 .463-.22l-.2-2.787a.138.138 0 0 1 .27-.049l.912 3.192a.69.69 0 0 0 .443.463l1.946.649a.137.137 0 0 1-.043.268h-1.87a.69.69 0 0 0-.58.318l-5.096 8.01a.206.206 0 0 1-.36-.2l3.653-7.536a.412.412 0 0 0-.37-.592H7.158a.413.413 0 0 0-.37.592l3.652 7.535a.206.206 0 0 1-.36.201l-5.096-8.01a.69.69 0 0 0-.58-.318H2.477a.138.138 0 0 1-.042-.268l2-.65a.69.69 0 0 0 .447-.466l.911-3.188a.138.138 0 0 1 .27.049l-.2 2.787a.275.275 0 0 0 .464.22l4.157-3.927a.137.137 0 0 1 .201.187L7.896 7.77a.275.275 0 0 0 .213.449h7.783a.275.275 0 0 0 .213-.449l-2.79-3.432a.138.138 0 0 1 .202-.187Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoSketch.iconName = "logo-sketch";

export default IconLogoSketch;
