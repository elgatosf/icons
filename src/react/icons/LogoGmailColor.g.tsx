import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGmailColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M1 5.75001V7.75001L3.29375 9.97001L6 11.5L6.5 8.13376L6 5.00001L4.6 3.95001C3.11625 2.83751 1 3.89626 1 5.75001Z"
				fill="#C5221F"
			/>
			<path
				d="M18 5.00001L17.5 8.17501L18 11.5L20.4562 10.2838L23 7.75001V5.75001C23 3.89626 20.8837 2.83751 19.4 3.95001L18 5.00001Z"
				fill="#FFBA00"
			/>
			<path d="M2.5 20H6V11.5L1 7.75V18.5C1 19.3287 1.67125 20 2.5 20Z" fill="#2684FC" />
			<path d="M18 20H21.5C22.3288 20 23 19.3287 23 18.5V7.75L18 11.5V20Z" fill="#00AC47" />
			<path d="M12 9.5L6 5V11.5L12 16L18 11.5V5L12 9.5Z" fill="#E94235" />
		</svg>
	);
};

IconLogoGmailColor.iconName = "logo-gmail--color";

export default IconLogoGmailColor;
