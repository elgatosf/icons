import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionWheelFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5zm3 4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"
						clipRule="evenodd"
					/>
					<path d="M3.664 6c.313 0 .522.329.445.631Q4 7.05 4 7.5v5q.001.45.109.869c.077.302-.132.631-.445.631H3.5A2.5 2.5 0 0 1 1 11.5v-3A2.5 2.5 0 0 1 3.5 6zM16.336 14c-.313 0-.522-.329-.445-.631Q16 12.95 16 12.5v-5q-.001-.45-.109-.869c-.077-.302.132-.631.445-.631h.164A2.5 2.5 0 0 1 19 8.5v3a2.5 2.5 0 0 1-2.5 2.5z" />
				</svg>
			);
	}
};

IconActionWheelFilled.iconName = "action-wheel--filled";

export default IconActionWheelFilled;
