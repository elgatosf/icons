import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSlidesColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#FFBA00"
				d="M18.5 23h-13A1.5 1.5 0 0 1 4 21.5v-19A1.5 1.5 0 0 1 5.5 1h9L20 6.5v15a1.5 1.5 0 0 1-1.5 1.5"
			/>
			<path fill="#FF9500" d="M14.5 1 20 6.5h-5.5z" />
			<path fill="#fff" d="M15.75 9.5H7v6.75h10V9.5zm0 5.5h-7.5v-4.25h7.5z" />
		</svg>
	);
};

IconLogoGoogleSlidesColor.iconName = "logo-google-slides--color";

export default IconLogoGoogleSlidesColor;
