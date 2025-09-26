import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoRaycastColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#FF6363"
				fillRule="evenodd"
				d="M7 14.914V17L2 12l1.043-1.043zM9.089 17H7l5 5 1.043-1.042zm11.868-3.957L22 12 11.999 1.999l-1.042 1.047 3.956 3.956h-2.39L9.761 4.246 8.718 5.288l1.717 1.718h-1.2v7.763h7.763v-1.2l1.717 1.716 1.043-1.041-2.76-2.762V9.09zM7.522 6.482 6.476 7.526l1.12 1.12 1.043-1.044zm8.882 8.88-1.044 1.045 1.12 1.12 1.044-1.044zM5.283 8.72 4.239 9.766 7 12.526v-2.088zm8.285 8.285H11.48l2.76 2.762 1.045-1.044z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoRaycastColor.iconName = "logo-raycast--color";

export default IconLogoRaycastColor;
