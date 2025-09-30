import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconClipboard = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.01373 4C7.13809 2.87501 8.09186 2 9.25 2H14.75C15.9081 2 16.8619 2.87501 16.9863 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H7.01373ZM9.25 3.5H14.75C15.1642 3.5 15.5 3.83579 15.5 4.25V5.25C15.5 5.66421 15.1642 6 14.75 6H9.25C8.83579 6 8.5 5.66421 8.5 5.25V4.25C8.5 3.83579 8.83579 3.5 9.25 3.5ZM7.01373 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V20C5.5 20.2761 5.72386 20.5 6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V6C18.5 5.72386 18.2761 5.5 18 5.5H16.9863C16.8619 6.62499 15.9081 7.5 14.75 7.5H9.25C8.09186 7.5 7.13809 6.62499 7.01373 5.5Z"
			/>
		</svg>
	);
};

IconClipboard.iconName = "clipboard";

export default IconClipboard;
