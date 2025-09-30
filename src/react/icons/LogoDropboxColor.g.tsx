import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoDropboxColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				d="M12.0129 6.38243L7.00647 9.76486L12.0129 13.1473L7.00647 16.5297L2 13.129L7.00647 9.74657L2 6.38243L7.00647 3L12.0129 6.38243ZM6.98058 17.6176L11.9871 14.2351L16.9935 17.6176L11.9871 21L6.98058 17.6176ZM12.0129 13.129L17.0194 9.74657L12.0129 6.38243L16.9935 3L22 6.38243L16.9935 9.76486L22 13.1473L16.9935 16.5297L12.0129 13.129Z"
				fill="#0061FF"
			/>
		</svg>
	);
};

IconLogoDropboxColor.iconName = "logo-dropbox--color";

export default IconLogoDropboxColor;
