import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSitesColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#4758B5"
				d="M18.5 23h-13A1.5 1.5 0 0 1 4 21.5v-19A1.5 1.5 0 0 1 5.5 1h9L20 6.5v15a1.5 1.5 0 0 1-1.5 1.5"
			/>
			<path fill="#354287" d="M14.5 1 20 6.5h-5.5z" />
			<path fill="#fff" d="M16.5 9.5h-9v1.25h9zM16.5 12h-1.25v4.25h1.25zM14 12H7.5v4.25H14z" />
		</svg>
	);
};

IconLogoGoogleSitesColor.iconName = "logo-google-sites--color";

export default IconLogoGoogleSitesColor;
