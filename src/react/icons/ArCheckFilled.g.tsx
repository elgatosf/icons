import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconArCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0m20-13.5v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0m-11-.755a2 2 0 0 1 2 0l5 2.886a2 2 0 0 1 .23.156L12 11.134 5.77 7.537q.108-.086.23-.156zm7.98 4.341-6.23 3.597v.63A6.48 6.48 0 0 1 17.5 11q.776.002 1.5.174v-2.06q0-.141-.02-.278m-7.73 3.597v3.276c-.163.569-.25 1.17-.25 1.791s.087 1.222.25 1.791v.337a2 2 0 0 1-.25-.122l-5-2.887a2 2 0 0 1-1-1.732V9.113q0-.14.02-.277z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconArCheckFilled.iconName = "ar-check--filled";

export default IconArCheckFilled;
