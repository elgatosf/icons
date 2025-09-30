import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAsana = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M15.8975 7.33318C15.8975 9.48512 14.1527 11.2313 12.0007 11.2313C9.84744 11.2313 8.10261 9.48648 8.10261 7.33318C8.10261 5.17988 9.84744 3.43506 12.0007 3.43506C14.1527 3.43506 15.8975 5.17988 15.8975 7.33318ZM6.93669 12.2052C4.78475 12.2052 3.03857 13.95 3.03857 16.102C3.03857 18.2539 4.78339 20.0001 6.93669 20.0001C9.08999 20.0001 10.8348 18.2552 10.8348 16.102C10.8348 13.95 9.08999 12.2052 6.93669 12.2052ZM17.0635 12.2052C14.9101 12.2052 13.1653 13.95 13.1653 16.1033C13.1653 18.2565 14.9101 20.0014 17.0635 20.0014C19.2153 20.0014 20.9616 18.2565 20.9616 16.1033C20.9616 13.95 19.2167 12.2052 17.0635 12.2052Z" />
		</svg>
	);
};

IconLogoAsana.iconName = "logo-asana";

export default IconLogoAsana;
