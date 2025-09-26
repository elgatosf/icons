import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMiro = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M16.5 3A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm-8.07 7.153-1.633 7.444H8.43l3.132-7.975-1.498 7.975h1.634l2.995-8.507-1.361 8.507h1.634l2.996-9.305-2.996-1.86h-1.634l1.361 2.391L11.7 6.432h-1.634l1.498 2.923L8.43 6.432H6.797z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoMiro.iconName = "logo-miro";

export default IconLogoMiro;
