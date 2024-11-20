import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoYoutube = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M20.597 4.76a2.76 2.76 0 0 1 1.945 1.945h-.002C23 8.42 23 12 23 12s0 3.58-.46 5.296a2.76 2.76 0 0 1-1.945 1.945C18.88 19.7 12 19.7 12 19.7s-6.88 0-8.595-.46a2.76 2.76 0 0 1-1.945-1.945C1 15.58 1 12 1 12s0-3.58.46-5.295A2.76 2.76 0 0 1 3.405 4.76C5.12 4.3 12 4.3 12 4.3s6.88 0 8.597.46M15.517 12 9.8 15.3V8.7z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoYoutube.iconName = "logo-youtube";

export default IconLogoYoutube;
