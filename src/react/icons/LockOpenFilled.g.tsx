import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLockOpenFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10.7563 2.99739C11.4172 2.72361 12.1501 2.67557 12.8412 2.86074C13.5322 3.04591 14.1429 3.45393 14.5784 4.02153C15.0139 4.58912 15.25 5.28456 15.25 6V9H6C4.89543 9 4 9.89543 4 11V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9H16.75V6C16.75 4.95436 16.405 3.93794 15.7684 3.10838C15.1319 2.27882 14.2394 1.68248 13.2294 1.41185C12.2194 1.14122 11.1483 1.21143 10.1822 1.61157C9.2162 2.01172 8.40919 2.71945 7.88637 3.625C7.67926 3.98372 7.80217 4.44241 8.16089 4.64952C8.51961 4.85663 8.9783 4.73372 9.18541 4.375C9.54313 3.75542 10.0953 3.27118 10.7563 2.99739ZM13.5 14.5C13.5 15.0552 13.1984 15.54 12.75 15.7993V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V15.7993C10.8016 15.54 10.5 15.0552 10.5 14.5C10.5 13.6716 11.1716 13 12 13C12.8284 13 13.5 13.6716 13.5 14.5Z"
			/>
		</svg>
	);
};

IconLockOpenFilled.iconName = "lock-open--filled";

export default IconLockOpenFilled;
