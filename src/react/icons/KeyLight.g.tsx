import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12.75 15.997a74 74 0 0 0 5.104-.193c1.61-.123 2.85-1.338 2.995-2.946a37.6 37.6 0 0 0 0-6.716c-.145-1.608-1.385-2.823-2.995-2.946C16.49 3.091 14.564 3 12 3s-4.49.091-5.854.196c-1.61.123-2.85 1.338-2.995 2.946a37.6 37.6 0 0 0 0 6.716c.145 1.608 1.385 2.822 2.995 2.946 1.228.094 2.91.178 5.104.193v5.253a.75.75 0 0 0 1.5 0zM6.261 4.692C7.584 4.59 9.471 4.5 12 4.5s4.416.09 5.739.192c.886.068 1.537.712 1.616 1.584a36 36 0 0 1 0 6.448c-.079.872-.73 1.517-1.616 1.584-1.323.102-3.21.192-5.739.192s-4.416-.09-5.739-.192c-.886-.067-1.537-.712-1.616-1.584a36 36 0 0 1 0-6.448c.079-.872.73-1.516 1.616-1.584"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLight.iconName = "key-light";

export default IconKeyLight;
