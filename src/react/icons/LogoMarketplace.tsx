/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMarketplace = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m8.016 6.019-.01-.007-1.517-.87-.76.439v3.393l.761.435 2.15-1.244-.738-.424-1.435.83V5.979l4.162 2.39-.002.015a3.44 3.44 0 0 1-3.26 2.368 3.445 3.445 0 0 1-3.435-3.448c0-1.9 1.54-3.447 3.434-3.447a3.44 3.44 0 0 1 3.33 2.609l.763-.443A4.3 4.3 0 0 0 9.8 3.76 4.25 4.25 0 0 0 7.366 3a4.25 4.25 0 0 0-3.032 1.26 4.29 4.29 0 0 0-1.256 3.044c0 1.15.446 2.23 1.256 3.044a4.277 4.277 0 0 0 5.802.241 4.3 4.3 0 0 0 1.449-2.52l-3.57-2.05Zm11.419 5.59a1.565 1.565 0 0 0 .643-2.993l-2.511-1.133a.196.196 0 0 1 0-.357l2.511-1.133A1.57 1.57 0 0 0 21 4.565a1.565 1.565 0 0 0-2.992-.643l-1.134 2.511a.196.196 0 0 1-.357 0l-1.133-2.51A1.57 1.57 0 0 0 13.956 3a1.565 1.565 0 0 0-.643 2.993l2.512 1.133a.195.195 0 0 1 0 .357l-2.511 1.133a1.57 1.57 0 0 0-.923 1.428 1.565 1.565 0 0 0 2.993.643l1.133-2.511a.196.196 0 0 1 .357 0l1.134 2.51a1.57 1.57 0 0 0 1.427.923M3.978 12.783a.978.978 0 1 0 0 1.956h4.925l-5.191 3.383A1.564 1.564 0 0 0 4.565 21c.55 0 1.033-.283 1.312-.712l3.384-5.19v4.924a.978.978 0 1 0 1.957 0v-7.24h-7.24Zm8.805 3.717a4.109 4.109 0 1 1 4.108 4.109h-4.108z" />
		</svg>
	);
};

IconLogoMarketplace.iconName = "logo-marketplace";

export default IconLogoMarketplace;
