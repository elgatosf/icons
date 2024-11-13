/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMouseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.25 1.673a8.8 8.8 0 0 0-2.427.565l-.973.379a2.32 2.32 0 0 0-1.34 1.376L5.9 5.7a19.6 19.6 0 0 0-1.066 4.8h6.417V1.673ZM4.752 12a19.6 19.6 0 0 0 .448 4.5c.697 3.194 3.586 5.5 6.855 5.5 3.206 0 6.032-2.233 6.715-5.366A20 20 0 0 0 19.23 12zm14.395-1.5a20 20 0 0 0-1.092-4.93l-.566-1.577a2.32 2.32 0 0 0-1.34-1.376l-.972-.38a8.8 8.8 0 0 0-2.427-.564V10.5z" />
		</svg>
	);
};

IconMouseFilled.iconName = "mouse--filled";

export default IconMouseFilled;
