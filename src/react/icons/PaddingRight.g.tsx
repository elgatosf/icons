import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPaddingRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21 3.75C21 3.33579 20.6642 3 20.25 3C19.8358 3 19.5 3.33579 19.5 3.75V20.25C19.5 20.6642 19.8358 21 20.25 21C20.6642 21 21 20.6642 21 20.25V3.75Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9ZM9 8.5H15C15.2761 8.5 15.5 8.72386 15.5 9V15C15.5 15.2761 15.2761 15.5 15 15.5H9C8.72386 15.5 8.5 15.2761 8.5 15V9C8.5 8.72386 8.72386 8.5 9 8.5Z"
			/>
		</svg>
	);
};

IconPaddingRight.iconName = "padding-right";

export default IconPaddingRight;
