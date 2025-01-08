import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionWheelFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<g clipPath="url(#prefix__a)">
				<path
					fillRule="evenodd"
					d="M6 8.25A2.25 2.25 0 0 1 8.25 6h7.5A2.25 2.25 0 0 1 18 8.25v7.5A2.25 2.25 0 0 1 15.75 18h-7.5A2.25 2.25 0 0 1 6 15.75zm3.75 5.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
					clipRule="evenodd"
				/>
				<path d="M3.75 7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-1.5A2.25 2.25 0 0 1 0 14.25v-4.5A2.25 2.25 0 0 1 2.25 7.5h1.5M20.25 16.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h1.5A2.25 2.25 0 0 1 24 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-1.5" />
			</g>
			<defs>
				<clipPath id="prefix__a">
					<path d="M0 0h24v24H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

IconActionWheelFilled.iconName = "action-wheel--filled";

export default IconActionWheelFilled;
