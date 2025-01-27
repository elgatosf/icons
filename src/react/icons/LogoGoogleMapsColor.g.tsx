import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleMapsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#1A73E8" d="M14.337 1.366a7.663 7.663 0 0 0-8.215 2.378l3.625 3.043z" />
			<path fill="#EA4335" d="M6.122 3.744a7.67 7.67 0 0 0-1.796 4.922c0 1.447.283 2.61.765 3.658l4.656-5.537z" />
			<path
				fill="#4285F4"
				d="M12.009 5.74a2.938 2.938 0 0 1 2.245 4.838s2.31-2.76 4.572-5.437a7.66 7.66 0 0 0-4.49-3.775l-4.589 5.42A2.98 2.98 0 0 1 12.01 5.74"
			/>
			<path
				fill="#FBBC04"
				d="M12.008 11.61a2.94 2.94 0 0 1-2.943-2.944c0-.715.25-1.38.682-1.88L5.09 12.325c.798 1.763 2.128 3.193 3.492 4.972l5.67-6.734a2.92 2.92 0 0 1-2.245 1.047"
			/>
			<path
				fill="#34A853"
				d="M14.154 19.159c2.56-4.008 5.537-5.82 5.537-10.476a7.7 7.7 0 0 0-.865-3.542L8.583 17.296c.432.566.881 1.214 1.314 1.88 1.563 2.41 1.13 3.84 2.128 3.84s.566-1.446 2.129-3.857"
			/>
		</svg>
	);
};

IconLogoGoogleMapsColor.iconName = "logo-google-maps--color";

export default IconLogoGoogleMapsColor;
