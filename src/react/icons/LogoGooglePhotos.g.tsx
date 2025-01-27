import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGooglePhotos = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.55 11h-4.63a5.98 5.98 0 0 0 1.54-4c0-3.31-2.69-6-6-6-.81 0-1.46.65-1.46 1.45v4.63a5.97 5.97 0 0 0-4-1.53c-3.31 0-6 2.69-6 6 0 .8.65 1.45 1.46 1.45h4.63a5.98 5.98 0 0 0-1.54 4c0 3.31 2.69 6 6 6 .8 0 1.45-.65 1.45-1.45v-4.63a5.98 5.98 0 0 0 4 1.54c3.31 0 6-2.69 6-6 0-.81-.65-1.46-1.45-1.46M13 3.04c1.95.26 3.46 1.94 3.46 3.96s-1.51 3.7-3.45 3.96V3.04zM7 7.55c2.02 0 3.7 1.51 3.96 3.45H3.04A3.99 3.99 0 0 1 7 7.55m4 13.41A3.99 3.99 0 0 1 7.55 17c0-2.02 1.51-3.7 3.45-3.96zm6-4.51c-2.02 0-3.7-1.51-3.96-3.45h7.93A4.01 4.01 0 0 1 17 16.45" />
		</svg>
	);
};

IconLogoGooglePhotos.iconName = "logo-google-photos";

export default IconLogoGooglePhotos;
