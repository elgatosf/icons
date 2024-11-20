import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMessage = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="m4.713 16.419-1.075 3.943 3.943-1.075.52.268A8.46 8.46 0 0 0 12 20.5 8.5 8.5 0 1 0 3.5 12c0 1.409.341 2.733.945 3.899zM22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.588-1.112l-4.224 1.151a1 1 0 0 1-1.228-1.227l1.152-4.224A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessage.iconName = "message";

export default IconMessage;
