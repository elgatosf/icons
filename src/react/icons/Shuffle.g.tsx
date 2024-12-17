import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShuffle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19.28 2.72a.75.75 0 1 0-1.06 1.06L19.44 5h-1.156a6.75 6.75 0 0 0-5.686 3.111l-4.46 6.969a5.25 5.25 0 0 1-4.422 2.42H2.75a.75.75 0 0 0 0 1.5h.966a6.75 6.75 0 0 0 5.686-3.111l4.46-6.969a5.25 5.25 0 0 1 4.422-2.42h1.155l-1.22 1.22a.75.75 0 0 0 1.061 1.06l2.5-2.5a.75.75 0 0 0 0-1.06zM2.75 5a.75.75 0 0 0 0 1.5h.966a5.25 5.25 0 0 1 4.422 2.42l.45.702a.75.75 0 0 0 1.263-.809l-.45-.702A6.75 6.75 0 0 0 3.717 5z" />
			<path d="M13.413 14.378a.75.75 0 0 0-1.264.809l.45.702A6.75 6.75 0 0 0 18.283 19h1.155l-1.22 1.22a.75.75 0 1 0 1.061 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-1.156a5.25 5.25 0 0 1-4.422-2.42l-.45-.702Z" />
		</svg>
	);
};

IconShuffle.iconName = "shuffle";

export default IconShuffle;
