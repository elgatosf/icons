import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoFigma = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.763 8.868A3.736 3.736 0 0 1 8.8 2h6.4a3.736 3.736 0 0 1 2.037 6.868 3.736 3.736 0 0 1-2.037 6.868h-.068a3.72 3.72 0 0 1-2.528-.986v3.48c0 2.087-1.71 3.77-3.787 3.77-2.06 0-3.753-1.668-3.753-3.736 0-1.311.676-2.465 1.699-3.132A3.73 3.73 0 0 1 5.064 12c0-1.312.676-2.466 1.699-3.132M12.603 12a2.53 2.53 0 0 0 2.53 2.529h.067a2.529 2.529 0 0 0 0-5.058h-.068A2.53 2.53 0 0 0 12.604 12m-1.207-2.529H8.8a2.529 2.529 0 0 0-.009 5.058h2.605zM8.8 15.736H8.79a2.53 2.53 0 0 0-2.52 2.528c0 1.393 1.145 2.529 2.546 2.529 1.42 0 2.58-1.152 2.58-2.563v-2.494zm2.596-7.472H8.8a2.529 2.529 0 1 1 0-5.057h2.596zm3.804 0h-2.596V3.207H15.2a2.529 2.529 0 1 1 0 5.057"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoFigma.iconName = "logo-figma";

export default IconLogoFigma;
