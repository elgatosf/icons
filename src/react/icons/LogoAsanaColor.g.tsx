import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAsanaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M15.898 7.33318C15.898 9.48512 14.1532 11.2313 12.0012 11.2313C9.84793 11.2313 8.1031 9.48648 8.1031 7.33318C8.1031 5.17988 9.84793 3.43506 12.0012 3.43506C14.1532 3.43506 15.898 5.17988 15.898 7.33318ZM6.93718 12.2052C4.78524 12.2052 3.03906 13.95 3.03906 16.102C3.03906 18.2539 4.78388 20.0001 6.93718 20.0001C9.09048 20.0001 10.8353 18.2552 10.8353 16.102C10.8353 13.95 9.09048 12.2052 6.93718 12.2052ZM17.064 12.2052C14.9106 12.2052 13.1658 13.95 13.1658 16.1033C13.1658 18.2565 14.9106 20.0014 17.064 20.0014C19.2158 20.0014 20.9621 18.2565 20.9621 16.1033C20.9621 13.95 19.2172 12.2052 17.064 12.2052Z"
				fill="#FF584A"
			/>
		</svg>
	);
};

IconLogoAsanaColor.iconName = "logo-asana--color";

export default IconLogoAsanaColor;
