import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleFormsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#7248B9"
				d="M18.5 23h-13A1.5 1.5 0 0 1 4 21.5v-19A1.5 1.5 0 0 1 5.5 1h9L20 6.5v15a1.5 1.5 0 0 1-1.5 1.5"
			/>
			<path fill="#56368A" d="M14.5 1 20 6.5h-5.5z" />
			<path
				fill="#fff"
				d="M16.5 9.5h-6.25v1.25h6.25zM8.25 10.875a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16.5 12.5h-6.25v1.25h6.25zM8.25 13.875a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16.5 15.5h-6.25v1.25h6.25zM8.25 16.875a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
			/>
		</svg>
	);
};

IconLogoGoogleFormsColor.iconName = "logo-google-forms--color";

export default IconLogoGoogleFormsColor;
