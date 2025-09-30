import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoFigmaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5.33301 18.6667C5.33301 16.8258 6.82541 15.3334 8.66634 15.3334H11.9997V18.6667C11.9997 20.5076 10.5073 22 8.66634 22C6.82541 22 5.33301 20.5076 5.33301 18.6667Z"
				fill="#24CB71"
			/>
			<path
				d="M12 2V8.66667H15.3333C17.1743 8.66667 18.6667 7.17427 18.6667 5.33333C18.6667 3.4924 17.1743 2 15.3333 2H12Z"
				fill="#FF7237"
			/>
			<path
				d="M15.3055 15.3334C17.1465 15.3334 18.6388 13.841 18.6388 12.0001C18.6388 10.1591 17.1465 8.66675 15.3055 8.66675C13.4646 8.66675 11.9722 10.1591 11.9722 12.0001C11.9722 13.841 13.4646 15.3334 15.3055 15.3334Z"
				fill="#00B6FF"
			/>
			<path
				d="M5.3335 5.33333C5.3335 7.17427 6.8259 8.66667 8.66683 8.66667H12.0002V2H8.66683C6.8259 2 5.3335 3.4924 5.3335 5.33333Z"
				fill="#FF3737"
			/>
			<path
				d="M5.33301 12C5.33301 13.8409 6.82541 15.3333 8.66634 15.3333H11.9997V8.66663H8.66634C6.82541 8.66663 5.33301 10.159 5.33301 12Z"
				fill="#874FFF"
			/>
		</svg>
	);
};

IconLogoFigmaColor.iconName = "logo-figma--color";

export default IconLogoFigmaColor;
