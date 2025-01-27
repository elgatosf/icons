import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleTranslate = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m12 22-1-3H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 17V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h6l.875 3H20q.875 0 1.438.563T22 7v13q0 .824-.562 1.413Q20.875 22 20 22zm-4.85-7.4q1.725 0 2.838-1.112T11.1 10.6q0-.2-.012-.362a1.7 1.7 0 0 0-.063-.338h-3.95v1.55H9.3a1.9 1.9 0 0 1-.763 1.088q-.562.387-1.362.387-.975 0-1.675-.7T4.8 10.5t.7-1.725a2.29 2.29 0 0 1 1.675-.7q.45 0 .85.163.4.162.725.487L9.975 7.55Q9.451 7 8.713 6.7T7.15 6.4q-1.674 0-2.863 1.188Q3.1 8.775 3.1 10.5t1.187 2.912Q5.475 14.6 7.15 14.6m6.7.5.55-.525a13.644 13.644 0 0 1-1.2-1.675zm1.25-1.275q.7-.825 1.063-1.575.362-.75.487-1.175h-3.975l.3 1.05h1q.2.374.475.813.275.437.65.887M13 21h7q.45 0 .725-.288A1 1 0 0 0 21 20V7q0-.45-.275-.725T20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275a8 8 0 0 1-.75 1.85A9.8 9.8 0 0 1 15.8 14.6l2.725 2.675L17.8 18l-2.7-2.7-.9.925L15 19z" />
		</svg>
	);
};

IconLogoGoogleTranslate.iconName = "logo-google-translate";

export default IconLogoGoogleTranslate;
