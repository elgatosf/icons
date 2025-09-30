import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGapHorizontal = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V3.75C11.25 3.33579 11.5858 3 12 3Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15 15C15 16.1046 15.8954 17 17 17H19C20.1046 17 21 16.1046 21 15V9C21 7.89543 20.1046 7 19 7L17 7C15.8954 7 15 7.89543 15 9V15ZM16.5 9V15C16.5 15.2761 16.7239 15.5 17 15.5H19C19.2761 15.5 19.5 15.2761 19.5 15V9C19.5 8.72386 19.2761 8.5 19 8.5H17C16.7239 8.5 16.5 8.72386 16.5 9Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 17C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7L7 7C8.10457 7 9 7.89543 9 9V15C9 16.1046 8.10457 17 7 17H5ZM4.5 15L4.5 9C4.5 8.72386 4.72386 8.5 5 8.5H7C7.27614 8.5 7.5 8.72386 7.5 9V15C7.5 15.2761 7.27614 15.5 7 15.5H5C4.72386 15.5 4.5 15.2761 4.5 15Z"
			/>
		</svg>
	);
};

IconGapHorizontal.iconName = "gap-horizontal";

export default IconGapHorizontal;
