import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconSheetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2.999 3.75a1 1 0 1 0 .002 2 1 1 0 0 0-.002-2M11.25 7a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-3.251 3.75a1 1 0 1 0 .002 2 1 1 0 0 0-.002-2m3.251.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-3.251 3.75a1 1 0 1 0 .002 2 1 1 0 0 0-.002-2m3.251.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSheetFilled.iconName = "sheet--filled";

export default IconSheetFilled;
