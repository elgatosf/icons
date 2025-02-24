import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBookmarkFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M16 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12.499c0 1.251 1.443 1.952 2.427 1.179l3.264-2.565a.5.5 0 0 1 .618 0l3.264 2.565c.984.773 2.427.072 2.427-1.18z" />
		</svg>
	);
};

IconBookmarkFilled.iconName = "bookmark--filled";

export default IconBookmarkFilled;
