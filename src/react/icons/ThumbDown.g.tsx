import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbDown = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m16.5 13-1.995 6.382A2.305 2.305 0 0 1 10 18.695V15H4.619a2 2 0 0 1-1.93-2.526l1.507-5.526A4 4 0 0 1 8.056 4H19a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zm-5 .5H4.619a.5.5 0 0 1-.483-.632l1.507-5.526A2.5 2.5 0 0 1 8.055 5.5H15v7.271l-1.926 6.164a.805.805 0 0 1-1.574-.24zm5-2H19a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-2.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconThumbDown.iconName = "thumb-down";

export default IconThumbDown;
