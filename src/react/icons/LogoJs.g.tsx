import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoJs = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M3 3h14v14H3zm8.333 11.559 1.071-.62c.282.46.649.798 1.297.798.545 0 .893-.273.893-.648 0-.452-.357-.611-.959-.874l-.328-.141c-.95-.404-1.58-.912-1.58-1.983 0-.987.752-1.739 1.927-1.739.837 0 1.438.292 1.87 1.053l-1.024.658c-.226-.405-.47-.564-.846-.564-.385 0-.63.244-.63.564 0 .394.245.554.809.798l.329.141c1.118.48 1.748.968 1.748 2.068 0 1.184-.93 1.832-2.18 1.832-1.222 0-2.012-.582-2.397-1.343m-2.679 1.343c-1.052 0-1.663-.545-1.973-1.202l1.071-.649c.207.367.395.677.846.677.432 0 .705-.17.705-.827V9.427h1.315v4.492c0 1.363-.798 1.983-1.964 1.983"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoJs.iconName = "logo-js";

export default IconLogoJs;
