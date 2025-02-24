import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAndroidColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="url(#prefix__a)" d="M1 5h22v13H1z" />
			<defs>
				<pattern id="prefix__a" width={1} height={1} patternContentUnits="objectBoundingBox">
					<use xlinkHref="#prefix__b" transform="matrix(.00595 0 0 .01007 -.083 -.027)" />
				</pattern>
				<image
					xlinkHref="data:image/png;base64,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"
					id="prefix__b"
					width={198}
					height={102}
					preserveAspectRatio="none"
				/>
			</defs>
		</svg>
	);
};

IconLogoAndroidColor.iconName = "logo-android--color";

export default IconLogoAndroidColor;
