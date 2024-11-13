/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
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
				d="m20.193 9.31-7.899-5.74a.5.5 0 0 0-.588 0L3.807 9.31a.5.5 0 0 0-.181.559l3.017 9.286a.5.5 0 0 0 .475.345h9.764a.5.5 0 0 0 .475-.345l3.018-9.286a.5.5 0 0 0-.182-.56Zm-7.017-6.952a2 2 0 0 0-2.351 0l-7.9 5.738a2 2 0 0 0-.726 2.236l3.017 9.286A2 2 0 0 0 7.118 21h9.764a2 2 0 0 0 1.902-1.382l3.017-9.285a2 2 0 0 0-.726-2.237l-7.9-5.738Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPentagon.iconName = "pentagon";

export default IconPentagon;
