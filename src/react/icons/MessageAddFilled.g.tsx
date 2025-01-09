import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageAddFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.038 21.924q.342 0 .68-.022a6.5 6.5 0 0 1 9.25-9.123q.031-.405.032-.817C22 6.46 17.54 2 12.038 2s-9.962 4.46-9.962 9.962c0 1.648.4 3.202 1.108 4.571l-1.148 4.208a.996.996 0 0 0 1.223 1.223l4.208-1.148a9.9 9.9 0 0 0 4.57 1.108" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessageAddFilled.iconName = "message-add--filled";

export default IconMessageAddFilled;
