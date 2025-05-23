import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKey = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17 9.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M8 9.5a6.5 6.5 0 1 1 4.595 6.216L11.53 16.78A.75.75 0 0 1 11 17H9.75v1.25A.75.75 0 0 1 9 19H7.75v1.25A.75.75 0 0 1 7 21H5a2 2 0 0 1-2-2v-1.482a2 2 0 0 1 .586-1.415l4.698-4.698A6.5 6.5 0 0 1 8 9.5m6.5-5a5 5 0 0 0-4.655 6.829.75.75 0 0 1-.168.804l-5.03 5.031a.5.5 0 0 0-.147.354V19a.5.5 0 0 0 .5.5h1.25v-1.25A.75.75 0 0 1 7 17.5h1.25v-1.25A.75.75 0 0 1 9 15.5h1.69l1.177-1.177a.75.75 0 0 1 .804-.168A5 5 0 1 0 14.5 4.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKey.iconName = "key";

export default IconKey;
