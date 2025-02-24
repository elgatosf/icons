import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
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
				d="M21.378 4.101A3 3 0 0 1 23.5 6.223h-.002C24 8.094 24 12 24 12s0 3.906-.502 5.777a3 3 0 0 1-2.122 2.121C19.506 20.4 12 20.4 12 20.4s-7.505 0-9.376-.502a3 3 0 0 1-2.122-2.121C0 15.906 0 12 0 12s0-3.906.502-5.777a3 3 0 0 1 2.122-2.122C4.494 3.6 12 3.6 12 3.6s7.505 0 9.378.502M15.837 12 9.6 15.6V8.4z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoYoutube.iconName = "logo-youtube";

export default IconLogoYoutube;
