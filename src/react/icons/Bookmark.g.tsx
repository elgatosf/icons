import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBookmark = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M14 3H6a1 1 0 0 0-1 1v12.499a.5.5 0 0 0 .809.393l3.264-2.565a1.5 1.5 0 0 1 1.854 0l3.264 2.565a.5.5 0 0 0 .809-.393V4a1 1 0 0 0-1-1m0-1a2 2 0 0 1 2 2v12.499c0 1.251-1.443 1.952-2.427 1.179l-3.264-2.565a.5.5 0 0 0-.618 0l-3.264 2.565C5.443 18.45 4 17.75 4 16.498V4a2 2 0 0 1 2-2z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBookmark.iconName = "bookmark";

export default IconBookmark;
