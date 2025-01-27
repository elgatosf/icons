import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleDrive = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.35 2.5h-4.7c-.71 0-1.37.38-1.73.99L1.58 14.4c-.36.62-.36 1.38-.01 2l2.35 4.09c.36.62 1.02 1 1.73 1h12.68c.72 0 1.38-.38 1.73-1l2.35-4.09c.36-.62.35-1.38-.01-2L16.08 3.49c-.36-.61-1.02-.99-1.73-.99m3.99 17H5.66l-2.35-4.09L9.65 4.5h4.7l6.34 10.91zM12.9 7.75h-1.8l-4.58 7.98.73 1.27h9.5l.73-1.27zM9.25 15 12 10.2l2.75 4.8z" />
		</svg>
	);
};

IconLogoGoogleDrive.iconName = "logo-google-drive";

export default IconLogoGoogleDrive;
