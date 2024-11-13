/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeLightroom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.038 3h11.924a3.266 3.266 0 0 1 3.27 3.269V17.73A3.266 3.266 0 0 1 17.961 21H6.038a3.266 3.266 0 0 1-3.268-3.269V6.27A3.266 3.266 0 0 1 6.038 3m6.423 12.723H7.586c-.086 0-.122-.044-.122-.137V7.723a.097.097 0 0 1 .086-.108h1.534c.036-.007.086.022.086.065v6.48h3.557c.08 0 .101.036.087.108l-.224 1.34a.14.14 0 0 1-.043.093.2.2 0 0 1-.086.022m2.577-6.157H13.69c-.014-.007-.021-.007-.036.008-.036.007-.057.05-.05.086a6 6 0 0 1 .05.81q.003.15.008.299c.007.201.007.389.007.576v4.291c.007.065.057.1.122.094h1.498c.072 0 .1-.03.1-.108v-3.924c.116-.13.267-.216.418-.288a3.24 3.24 0 0 1 1.455-.26c.086 0 .122-.021.122-.086V9.53a.097.097 0 0 0-.108-.086 2.2 2.2 0 0 0-1.145.274c-.31.172-.59.396-.82.662 0-.094-.008-.187-.015-.274a3 3 0 0 0-.036-.237.7.7 0 0 0-.065-.18.16.16 0 0 0-.158-.123Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAdobeLightroom.iconName = "logo-adobe-lightroom";

export default IconLogoAdobeLightroom;
