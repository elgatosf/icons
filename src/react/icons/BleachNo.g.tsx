import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBleachNo = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M13.067 5.812 11.732 3.5c-.77-1.333-2.695-1.333-3.464 0L6.933 5.812l.732.732L9.134 4a1 1 0 0 1 1.732 0l1.469 2.544z" />
			<path
				fillRule="evenodd"
				d="m10.707 11 2.663-2.663 3.558 6.163a1 1 0 0 1-.13 1.177l.708.708c.577-.607.764-1.56.288-2.385l-3.692-6.395 3.752-3.751a.5.5 0 0 0-.708-.708L10 10.293 2.854 3.146a.5.5 0 1 0-.708.708l3.752 3.75L2.206 14a1.994 1.994 0 0 0 .287 2.385l.708-.708a1 1 0 0 1-.13-1.177L6.63 8.337 9.293 11l-7.147 7.146a.5.5 0 0 0 .708.708L4.707 17h10.586l1.853 1.854a.5.5 0 0 0 .708-.708zm-.707.707L5.707 16h8.586z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBleachNo.iconName = "bleach-no";

export default IconBleachNo;
