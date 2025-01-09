import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoPython = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M9.602 2.195c.686-.121 1.465-.191 2.28-.195.816-.004 1.667.058 2.486.195 1.295.216 2.386 1.187 2.386 2.48v4.543c0 1.333-1.06 2.425-2.386 2.425H9.602c-1.618 0-2.98 1.39-2.98 2.964v2.18h-1.64c-1.388 0-2.198-1.006-2.537-2.419-.457-1.898-.438-3.032 0-4.85C2.825 7.934 4.04 7.1 5.426 7.1h6.562v-.606H7.217V4.675c0-1.377.366-2.123 2.385-2.48m.595 2.18a.905.905 0 0 0-.895-.912.904.904 0 0 0-.895.912.9.9 0 0 0 .895.906.9.9 0 0 0 .895-.906"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M17.349 9.218V7.1h1.79c1.389 0 2.044 1.038 2.386 2.419.477 1.917.498 3.354 0 4.849-.482 1.452-.999 2.419-2.385 2.419h-7.152v.606h4.766v1.819c0 1.377-1.185 2.076-2.386 2.424-1.807.525-3.255.444-4.766 0-1.261-.37-2.385-1.131-2.385-2.424v-4.544c0-1.307 1.08-2.424 2.385-2.424h4.766c1.588 0 2.98-1.383 2.98-3.026m-1.785 10.294a.9.9 0 0 0-.896-.907.9.9 0 0 0-.895.907c0 .503.402.912.895.912.495 0 .896-.41.896-.912"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoPython.iconName = "logo-python";

export default IconLogoPython;
