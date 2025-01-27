import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDatabaseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M18.973 11.2c-1.861.827-4.328 1.3-6.973 1.3s-5.112-.473-6.973-1.3c-.754-.336-1.452-.748-2.027-1.247V12c0 .525.232 1.045.685 1.53.452.486 1.115.927 1.951 1.298.836.372 1.828.667 2.92.867A19 19 0 0 0 12 16a19 19 0 0 0 3.444-.305c1.092-.2 2.084-.495 2.92-.867.836-.371 1.499-.812 1.95-1.297.454-.486.686-1.006.686-1.531V9.953c-.575.499-1.273.911-2.027 1.246" />
			<path d="M21 14.95c-.57.498-1.266.911-2.027 1.25-.964.428-2.073.753-3.257.97A20.7 20.7 0 0 1 12 17.5a20.7 20.7 0 0 1-3.716-.33c-1.184-.217-2.293-.543-3.257-.97-.76-.339-1.456-.752-2.027-1.25V17c0 1.057.943 2.076 2.636 2.828C7.324 20.578 9.613 21 12 21s4.676-.421 6.364-1.172C20.057 19.076 21 18.058 21 17zM12 3C7.03 3 3 4.79 3 7s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4" />
		</svg>
	);
};

IconDatabaseFilled.iconName = "database--filled";

export default IconDatabaseFilled;
