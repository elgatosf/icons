import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageUpToTopFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 22q.395 0 .78-.03a6.5 6.5 0 0 1 9.19-9.189Q22 12.394 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.654.401 3.214 1.112 4.588L1.96 20.812a1 1 0 0 0 1.228 1.227l4.224-1.151A9.96 9.96 0 0 0 12 22" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.354-3.854-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708M15 15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessageUpToTopFilled.iconName = "message-up-to-top--filled";

export default IconMessageUpToTopFilled;
