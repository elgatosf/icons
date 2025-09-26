import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftOnedriveColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#0364B8"
				d="m9.626 8.998 4.199 2.514 2.502-1.053a4.05 4.05 0 0 1 1.884-.321A6.25 6.25 0 0 0 6.936 8.254l.063-.002a5 5 0 0 1 2.627.746"
			/>
			<path
				fill="#0078D4"
				d="M9.627 8.997v.001A5 5 0 0 0 7 8.252l-.064.002a4.998 4.998 0 0 0-4.038 7.856l3.703-1.558 1.646-.692 3.664-1.542 1.914-.806z"
			/>
			<path
				fill="#1490DF"
				d="M18.212 10.138a4.049 4.049 0 0 0-1.885.322l-2.502 1.052.726.435 2.378 1.424 1.037.622 3.548 2.125a4.063 4.063 0 0 0-3.302-5.98"
			/>
			<path
				fill="#28A8EA"
				d="m17.967 13.993-1.038-.622-2.378-1.424-.726-.435-1.913.806-3.665 1.542-1.646.692-3.703 1.558A5 5 0 0 0 7 18.252h10.938a4.06 4.06 0 0 0 3.576-2.134z"
			/>
		</svg>
	);
};

IconLogoMicrosoftOnedriveColor.iconName = "logo-microsoft-onedrive--color";

export default IconLogoMicrosoftOnedriveColor;
