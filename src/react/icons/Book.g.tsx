import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconBook = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7.375 4.5A7.3 7.3 0 0 0 2.22 6.635a.75.75 0 0 0-.22.53V18.75a.75.75 0 0 0 1.28.53 5.79 5.79 0 0 1 8.226.034.747.747 0 0 0 1.024-.034 5.79 5.79 0 0 1 8.19 0 .75.75 0 0 0 1.28-.53V7.166a.75.75 0 0 0-.22-.53A7.29 7.29 0 0 0 12 6.154 7.3 7.3 0 0 0 7.375 4.5m3.875 2.988a5.79 5.79 0 0 0-7.75 0v9.711a7.29 7.29 0 0 1 7.75 0zm3.159-1.047A5.79 5.79 0 0 1 20.5 7.488v9.711a7.29 7.29 0 0 0-7.75 0V7.488a5.8 5.8 0 0 1 1.659-1.047"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBook.iconName = "book";

export default IconBook;
