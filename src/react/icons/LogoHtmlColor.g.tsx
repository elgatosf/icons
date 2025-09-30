import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoHtmlColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M4.58008 15.9766L3.37891 2.5H16.5918L15.3906 15.9766L9.9707 17.5" fill="#E34F26" />
			<path d="M10 16.3281L14.3652 15.127L15.3906 3.58398H10" fill="#EF652A" />
			<path
				d="M10 8.59375H7.80273L7.65625 6.89453H10V5.25391H9.9707H5.83984L5.86914 5.69336L6.2793 10.2637H10V8.59375ZM10 12.9004H9.9707L8.125 12.4023L8.00781 11.084H7.12891H6.36719L6.57227 13.6914L9.9707 14.6289H10V12.9004Z"
				fill="#EBEBEB"
			/>
			<path
				d="M9.9707 8.59375V10.2637H12.0215L11.8164 12.4023L9.9707 12.9004V14.6289L13.3691 13.6914L13.3984 13.3984L13.7793 9.0332L13.8379 8.59375H13.3691H9.9707ZM9.9707 5.25391V6.2793V6.89453H13.9844L14.0137 6.54297L14.1016 5.69336L14.1309 5.25391H9.9707Z"
				fill="white"
			/>
		</svg>
	);
};

IconLogoHtmlColor.iconName = "logo-html--color";

export default IconLogoHtmlColor;
