import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCloseCircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9.318 8.257a.75.75 0 0 0-1.06 1.061L10.938 12l-2.682 2.682a.75.75 0 1 0 1.061 1.06L12 13.062l2.682 2.682a.75.75 0 1 0 1.06-1.061L13.062 12l2.682-2.682a.75.75 0 0 0-1.061-1.06L12 10.938z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCloseCircleFilled.iconName = "close-circle--filled";

export default IconCloseCircleFilled;
