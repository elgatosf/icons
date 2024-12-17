import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckNeo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 15.255a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m10.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM7 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.334 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.333 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m10 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3.334 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3.333 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
			<path
				fillRule="evenodd"
				d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m8-6.5h4c1.928 0 3.223.003 4.19.133.922.124 1.317.339 1.578.6.26.26.475.655.599 1.578.13.966.133 2.261.133 4.189s-.003 3.223-.133 4.19c-.124.922-.339 1.317-.6 1.578-.26.26-.655.475-1.578.599-.966.13-2.261.133-4.189.133h-4c-1.928 0-3.223-.003-4.19-.133-.922-.124-1.317-.339-1.578-.6-.26-.26-.475-.655-.599-1.578-.13-.966-.133-2.261-.133-4.189s.003-3.223.133-4.19c.124-.922.339-1.317.6-1.578.26-.26.655-.475 1.578-.599C6.777 5.503 8.072 5.5 10 5.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckNeo.iconName = "stream-deck-neo";

export default IconStreamDeckNeo;
