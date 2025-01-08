import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLinkBroken = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 6.5A5.5 5.5 0 0 0 3.498 12c0 3.037 2.464 5.5 5.502 5.5h.25a.75.75 0 0 1 0 1.5H9a7 7 0 0 1-7.002-7c0-3.866 3.136-7 7.002-7h.25a.75.75 0 0 1 0 1.5zM14 5.75a.75.75 0 0 1 .75-.75H15a7 7 0 0 1 7.002 7c0 3.866-3.136 7-7.002 7h-.25a.75.75 0 0 1 0-1.5H15a5.5 5.5 0 0 0 5.502-5.5c0-3.037-2.464-5.5-5.502-5.5h-.25a.75.75 0 0 1-.75-.75" />
		</svg>
	);
};

IconLinkBroken.iconName = "link-broken";

export default IconLinkBroken;
