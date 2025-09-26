import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoHtml = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="m3.394 3 1.2 13.477L9.986 18l5.42-1.523L16.606 3zm10.458 6.094H7.817l-.146-1.7h6.328l.03-.351.087-.85.03-.44H5.854l.03.44.41 4.57h5.742l-.205 2.14-1.846.497-1.845-.498-.118-1.318h-1.64l.205 2.607 3.398.938h.03v-.008l3.369-.93.03-.293.38-4.365z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoHtml.iconName = "logo-html";

export default IconLogoHtml;
