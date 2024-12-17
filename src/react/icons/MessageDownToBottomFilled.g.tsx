import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageDownToBottomFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-2.354-7.146 2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L17.5 16.793l-1.646-1.647a.5.5 0 0 0-.708.708M15.5 20a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessageDownToBottomFilled.iconName = "message-down-to-bottom--filled";

export default IconMessageDownToBottomFilled;
