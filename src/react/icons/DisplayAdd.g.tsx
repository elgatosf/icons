import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplayAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6.81a6.5 6.5 0 0 0-1.5-1.078V6a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7.313c-.154.478-.255.98-.294 1.5H4a2 2 0 0 1-2-2zM11.498 20a6.5 6.5 0 0 1-.422-1.5H9.75a.75.75 0 0 0 0 1.5z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDisplayAdd.iconName = "display-add";

export default IconDisplayAdd;
