import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDiamond = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m20.525 11.646-8.171-8.171a.5.5 0 0 0-.708 0l-8.171 8.171a.5.5 0 0 0 0 .708l8.171 8.171a.5.5 0 0 0 .707 0l8.172-8.171a.5.5 0 0 0 0-.708m-7.11-9.232a2 2 0 0 0-2.83 0l-8.17 8.172a2 2 0 0 0 0 2.828l8.17 8.172a2 2 0 0 0 2.83 0l8.17-8.172a2 2 0 0 0 0-2.828z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDiamond.iconName = "diamond";

export default IconDiamond;
