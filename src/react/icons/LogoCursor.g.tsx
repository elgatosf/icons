import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCursor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					d="m20.64 6.598-8.214-4.743a.85.85 0 0 0-.854 0L3.36 6.598a.72.72 0 0 0-.359.62v9.563a.72.72 0 0 0 .36.621l8.214 4.743a.85.85 0 0 0 .853 0l8.214-4.742a.72.72 0 0 0 .359-.62V7.217a.72.72 0 0 0-.36-.621m-8.445 14.739 7.93-13.735a.293.293 0 0 0-.255-.439H4.012c-.107 0-.145.142-.052.196l7.787 4.495a.5.5 0 0 1 .252.437v8.992c0 .108.142.146.196.054"
					clipRule="evenodd"
				/>
			</g>
			<defs>
				<clipPath id="prefix__a">
					<path d="M0 0h24v24H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

IconLogoCursor.iconName = "logo-cursor";

export default IconLogoCursor;
