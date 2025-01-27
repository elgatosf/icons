import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMountain = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.707 4.793c-.78-1.277-2.634-1.277-3.414 0L.86 16.957C.045 18.29 1.004 20 2.566 20h18.902c1.554 0 2.514-1.696 1.715-3.029l-5.468-9.113c-.777-1.294-2.653-1.294-3.43 0l-.35.582zm-5.57 6.405L2.14 17.739a.5.5 0 0 0 .427.761h14.868a.5.5 0 0 0 .426-.76l-3.997-6.542-1.333 1.332a.75.75 0 0 1-1.06 0L10 11.06l-1.47 1.47a.75.75 0 0 1-1.06 0zM8 10.939 6.942 9.881l2.631-4.306a.5.5 0 0 1 .854 0l2.631 4.306L12 10.94l-1.47-1.47a.75.75 0 0 0-1.06 0zm11.14 6.018-4.322-7.072.753-1.255a.5.5 0 0 1 .858 0l5.467 9.113a.5.5 0 0 1-.428.757h-2.096a1.97 1.97 0 0 0-.232-1.543"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMountain.iconName = "mountain";

export default IconMountain;
