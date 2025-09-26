import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAtlassianConfluence = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.652 16.556c-.186.303-.395.656-.573.936a.573.573 0 0 0 .192.78l3.724 2.29a.573.573 0 0 0 .793-.194c.149-.25.34-.573.55-.92 1.475-2.434 2.959-2.136 5.634-.859l3.691 1.756a.574.574 0 0 0 .77-.286l1.774-4.01a.573.573 0 0 0-.287-.75c-.779-.367-2.328-1.098-3.723-1.77-5.018-2.438-9.283-2.28-12.545 3.027" />
			<path d="M20.347 7.457c.186-.304.395-.656.573-.937a.573.573 0 0 0-.192-.78l-3.724-2.29a.57.57 0 0 0-.816.189c-.149.249-.34.573-.55.919-1.475 2.435-2.958 2.137-5.633.86L6.325 3.67a.573.573 0 0 0-.771.287L3.78 7.967a.573.573 0 0 0 .286.75c.78.366 2.329 1.097 3.724 1.77 5.029 2.434 9.294 2.271 12.556-3.03" />
		</svg>
	);
};

IconLogoAtlassianConfluence.iconName = "logo-atlassian-confluence";

export default IconLogoAtlassianConfluence;
