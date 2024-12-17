import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPackage = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12.971 2.54a2 2 0 0 0-1.942 0l-7 3.889A2 2 0 0 0 3 8.177v7.646a2 2 0 0 0 1.029 1.749l7 3.889a2 2 0 0 0 1.942 0l7-3.89A2 2 0 0 0 21 15.824V8.177a2 2 0 0 0-1.029-1.748l-7-3.89Zm-.728 1.311 6.397 3.554-2.48 1.394L9.6 5.05l2.158-1.199a.5.5 0 0 1 .486 0Zm-4.177 2.05L5.36 7.406 12 11.14l2.637-1.484-6.571-3.754ZM4.5 15.824V8.642l6.75 3.797v7.429L4.757 16.26a.5.5 0 0 1-.257-.437Zm14.743.437-6.493 3.608v-7.43l6.75-3.796v7.181a.5.5 0 0 1-.257.437"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPackage.iconName = "package";

export default IconPackage;
