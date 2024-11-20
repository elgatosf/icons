import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeExpressColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#000B1D"
				d="M17.965 3H6.035A3.266 3.266 0 0 0 2.77 6.267v11.466A3.266 3.266 0 0 0 6.035 21h11.93a3.266 3.266 0 0 0 3.266-3.267V6.267A3.266 3.266 0 0 0 17.965 3"
			/>
			<path
				fill="url(#prefix__a)"
				d="M13.939 8.258a2.08 2.08 0 0 0-1.92-1.274c-.839 0-1.602.504-1.927 1.278l-2.637 6.281a1.3 1.3 0 0 0 1.198 1.807h2.937a1.308 1.308 0 0 0-.004-2.618l-.502.004a.297.297 0 0 1-.273-.413l.936-2.23a.289.289 0 0 1 .536-.002l1.91 4.466c.262.597.761.79 1.201.792a1.3 1.3 0 0 0 1.199-1.809z"
			/>
			<defs>
				<pattern id="prefix__a" width={1} height={1} patternContentUnits="objectBoundingBox">
					<use xlinkHref="#prefix__b" transform="matrix(.01719 0 0 .01719 -.187 -.187)" />
				</pattern>
				<image
					xlinkHref="data:image/png;base64,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"
					id="prefix__b"
					width={80}
					height={80}
				/>
			</defs>
		</svg>
	);
};

IconLogoAdobeExpressColor.iconName = "logo-adobe-express--color";

export default IconLogoAdobeExpressColor;
