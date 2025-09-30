import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleFormsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M18.5 23H5.5C4.67125 23 4 22.3288 4 21.5V2.5C4 1.67125 4.67125 1 5.5 1H14.5L20 6.5V21.5C20 22.3288 19.3287 23 18.5 23Z"
				fill="#7248B9"
			/>
			<path d="M14.5 1L20 6.5H14.5V1Z" fill="#56368A" />
			<path d="M16.5 9.5H10.25V10.75H16.5V9.5Z" fill="white" />
			<path
				d="M8.25 10.875C8.66422 10.875 9 10.5392 9 10.125C9 9.71077 8.66422 9.375 8.25 9.375C7.83577 9.375 7.5 9.71077 7.5 10.125C7.5 10.5392 7.83577 10.875 8.25 10.875Z"
				fill="white"
			/>
			<path d="M16.5 12.5H10.25V13.75H16.5V12.5Z" fill="white" />
			<path
				d="M8.25 13.875C8.66422 13.875 9 13.5392 9 13.125C9 12.7108 8.66422 12.375 8.25 12.375C7.83577 12.375 7.5 12.7108 7.5 13.125C7.5 13.5392 7.83577 13.875 8.25 13.875Z"
				fill="white"
			/>
			<path d="M16.5 15.5H10.25V16.75H16.5V15.5Z" fill="white" />
			<path
				d="M8.25 16.875C8.66422 16.875 9 16.5392 9 16.125C9 15.7108 8.66422 15.375 8.25 15.375C7.83577 15.375 7.5 15.7108 7.5 16.125C7.5 16.5392 7.83577 16.875 8.25 16.875Z"
				fill="white"
			/>
		</svg>
	);
};

IconLogoGoogleFormsColor.iconName = "logo-google-forms--color";

export default IconLogoGoogleFormsColor;
