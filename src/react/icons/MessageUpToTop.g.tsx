import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageUpToTop = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m4.713 16.419-1.075 3.943 3.943-1.075.52.268c1.091.565 2.321.9 3.629.94.281.541.636 1.037 1.05 1.475q-.386.03-.78.03a9.96 9.96 0 0 1-4.588-1.112l-4.224 1.151a1 1 0 0 1-1.228-1.227l1.152-4.224A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10q0 .394-.03.781a6.5 6.5 0 0 0-1.474-1.051A8.5 8.5 0 0 0 3.5 12c0 1.409.341 2.733.945 3.899z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.354-3.854-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708M15 15.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessageUpToTop.iconName = "message-up-to-top";

export default IconMessageUpToTop;
