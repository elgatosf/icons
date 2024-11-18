import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconArFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zm0 18.5v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m16.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v1.75h-1.75a.75.75 0 0 0 0 1.5M22 2.75v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M11 4.495a2 2 0 0 1 2 0l5 2.886a2 2 0 0 1 .23.156L12 11.134 5.77 7.537q.108-.086.23-.156zm1.75 7.938 6.23-3.597q.02.137.02.277v5.774a2 2 0 0 1-1 1.732l-5 2.887a2 2 0 0 1-.25.122zm-1.5 0v7.195a2 2 0 0 1-.25-.122l-5-2.887a2 2 0 0 1-1-1.732V9.113q0-.14.02-.277z" />
		</svg>
	);
};

IconArFilled.iconName = "ar--filled";

export default IconArFilled;
