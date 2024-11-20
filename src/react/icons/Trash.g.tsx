import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTrash = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11 8.75a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0zM13.75 8a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 .75-.75" />
			<path
				fillRule="evenodd"
				d="M12 1.25A3.75 3.75 0 0 0 8.25 5h-4.5a.75.75 0 0 0 0 1.5h1.338l.801 13.617A2 2 0 0 0 7.886 22h8.228a2 2 0 0 0 1.997-1.883l.8-13.617h1.339a.75.75 0 0 0 0-1.5h-4.5A3.75 3.75 0 0 0 12 1.25M14.25 5a2.25 2.25 0 0 0-4.5 0zM7.387 20.03 6.59 6.5h10.818l-.796 13.53a.5.5 0 0 1-.499.47H7.886a.5.5 0 0 1-.5-.47Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTrash.iconName = "trash";

export default IconTrash;
