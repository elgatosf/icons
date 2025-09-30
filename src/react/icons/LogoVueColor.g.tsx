import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVueColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M14.4823 3.0001L11.9997 7.29999L9.5172 3.0001H1.25L11.9997 21.6194L22.7495 3.0001H14.4823Z"
				fill="#41B883"
			/>
			<path
				d="M14.4812 3.00003L11.9987 7.29993L9.51613 3.00003H5.54883L11.9987 14.1714L18.4485 3.00003H14.4812Z"
				fill="#34495E"
			/>
		</svg>
	);
};

IconLogoVueColor.iconName = "logo-vue--color";

export default IconLogoVueColor;
