import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftTodo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.756 7.273A.84.84 0 0 1 22 7.86a.8.8 0 0 1-.244.586l-11.24 11.24a.7.7 0 0 1-.264.186.9.9 0 0 1-.322.059.8.8 0 0 1-.586-.244l-6.211-6.211a.7.7 0 0 1-.186-.264.9.9 0 0 1-.058-.322.8.8 0 0 1 .244-.586l2.959-2.969a.84.84 0 0 1 .586-.244.8.8 0 0 1 .586.244L9.93 12l7.685-7.686a.8.8 0 0 1 .274-.185.8.8 0 0 1 .312-.059.83.83 0 0 1 .596.244zM4.314 12.89l2.364 2.363 2.373-2.363-2.373-2.373zm5.616 5.615L20.574 7.859l-2.373-2.363L7.566 16.141l.069.068z" />
		</svg>
	);
};

IconLogoMicrosoftTodo.iconName = "logo-microsoft-todo";

export default IconLogoMicrosoftTodo;
