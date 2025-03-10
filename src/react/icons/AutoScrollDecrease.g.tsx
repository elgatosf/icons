import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAutoScrollDecrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.28 7.78a.75.75 0 0 1-1.06-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1-1.06 1.06L10 4.06zM6.28 16.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l1.144-1.144a6.5 6.5 0 0 1-.542-1.578L10 19.939z" />
			<path
				fillRule="evenodd"
				d="M13 12q-.002.51-.16.968c-.418.43-.777.918-1.065 1.45A3 3 0 1 1 13 12m-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-3-6a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconAutoScrollDecrease.iconName = "auto-scroll-decrease";

export default IconAutoScrollDecrease;
