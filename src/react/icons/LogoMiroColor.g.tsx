import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMiroColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#FD3"
				d="M3 7.5A4.5 4.5 0 0 1 7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5z"
			/>
			<path
				fill="#1C1C1E"
				fillRule="evenodd"
				d="M14.967 6.431h-1.634l1.361 2.393L11.7 6.43h-1.634l1.498 2.924L8.43 6.431H6.797l1.634 3.722-1.634 7.444H8.43l3.132-7.975-1.498 7.975h1.634l2.996-8.507-1.362 8.507h1.634l2.995-9.305z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoMiroColor.iconName = "logo-miro--color";

export default IconLogoMiroColor;
