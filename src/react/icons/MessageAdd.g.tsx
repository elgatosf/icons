import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m4.779 16.364-1.072 3.929 3.929-1.072.518.268a8.4 8.4 0 0 0 3.539.934c.272.54.618 1.038 1.024 1.479q-.335.022-.68.022a9.9 9.9 0 0 1-4.57-1.108l-4.208 1.148a.996.996 0 0 1-1.223-1.223l1.148-4.208a9.9 9.9 0 0 1-1.108-4.57C2.076 6.46 6.536 2 12.038 2S22 6.46 22 11.962q0 .413-.033.816a6.5 6.5 0 0 0-1.464-1.044 8.468 8.468 0 0 0-16.933.228c0 1.403.34 2.723.941 3.884z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessageAdd.iconName = "message-add";

export default IconMessageAdd;
