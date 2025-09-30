import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDropletFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.8441 2.94923C8.62821 4.8727 4 9.43635 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.43635 15.3718 4.8727 13.1559 2.94923C12.4846 2.36655 11.5154 2.36655 10.8441 2.94923ZM16.8296 15.2941C16.9368 14.894 16.6994 14.4827 16.2993 14.3755C15.8992 14.2683 15.4879 14.5058 15.3807 14.9059C15.2217 15.4993 14.9093 16.0404 14.4749 16.4749C14.0404 16.9093 13.4993 17.2217 12.9059 17.3807C12.5058 17.4879 12.2683 17.8992 12.3755 18.2993C12.4827 18.6994 12.894 18.9368 13.2941 18.8296C14.1419 18.6025 14.9149 18.1561 15.5355 17.5355C16.1561 16.9149 16.6025 16.1419 16.8296 15.2941Z"
			/>
		</svg>
	);
};

IconDropletFilled.iconName = "droplet--filled";

export default IconDropletFilled;
