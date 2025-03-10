import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPentagon = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M20.193 9.31 12.294 3.57a.5.5 0 0 0-.588 0L3.807 9.31a.5.5 0 0 0-.181.559l3.017 9.286a.5.5 0 0 0 .475.345h9.764a.5.5 0 0 0 .475-.345l3.018-9.286a.5.5 0 0 0-.182-.56m-7.017-6.952a2 2 0 0 0-2.351 0l-7.9 5.738a2 2 0 0 0-.726 2.236l3.017 9.286A2 2 0 0 0 7.118 21h9.764a2 2 0 0 0 1.902-1.382l3.017-9.285a2 2 0 0 0-.726-2.237z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPentagon.iconName = "pentagon";

export default IconPentagon;
