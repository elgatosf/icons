import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSheetsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#00AC47"
				d="M18.5 23h-13A1.5 1.5 0 0 1 4 21.5v-19A1.5 1.5 0 0 1 5.5 1h9L20 6.5v15a1.5 1.5 0 0 1-1.5 1.5"
			/>
			<path fill="#00832D" d="M14.5 1 20 6.5h-5.5z" />
			<path
				fill="#fff"
				d="M15.75 9.5H7v7.25h10V9.5zm-7.5 1.25h3.125v1.75H8.25zm0 4.75v-1.75h3.125v1.75zm7.5 0h-3.125v-1.75h3.125zm0-3h-3.125v-1.75h3.125z"
			/>
		</svg>
	);
};

IconLogoGoogleSheetsColor.iconName = "logo-google-sheets--color";

export default IconLogoGoogleSheetsColor;
