import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEyeContactFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zm0 18.5v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m16.75.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75zM22 2.75v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
			<path
				fillRule="evenodd"
				d="M3.71 12.825a1.5 1.5 0 0 1 0-1.65C4.788 9.54 7.624 6 12 6c4.377 0 7.212 3.54 8.29 5.175.329.5.329 1.15 0 1.65C19.211 14.46 16.376 18 12 18c-4.377 0-7.213-3.54-8.29-5.175M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconEyeContactFilled.iconName = "eye-contact--filled";

export default IconEyeContactFilled;
