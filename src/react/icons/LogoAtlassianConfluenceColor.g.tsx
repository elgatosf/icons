import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAtlassianConfluenceColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="url(#prefix__a)"
				d="M3.652 16.556c-.186.303-.396.656-.573.936a.573.573 0 0 0 .192.78l3.723 2.29a.573.573 0 0 0 .793-.194c.15-.25.341-.573.55-.92 1.475-2.434 2.959-2.136 5.634-.859l3.692 1.756a.57.57 0 0 0 .77-.286l1.773-4.01a.573.573 0 0 0-.286-.75 449 449 0 0 1-3.724-1.77c-5.018-2.438-9.282-2.28-12.544 3.027"
			/>
			<path
				fill="url(#prefix__b)"
				d="M20.346 7.457c.187-.304.396-.656.573-.937a.573.573 0 0 0-.192-.78l-3.723-2.29a.573.573 0 0 0-.816.189c-.15.249-.341.573-.55.919-1.475 2.435-2.959 2.137-5.634.86L6.324 3.67a.573.573 0 0 0-.77.287L3.78 7.967a.573.573 0 0 0 .287.75c.779.366 2.328 1.097 3.723 1.77 5.03 2.434 9.294 2.271 12.556-3.03"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={20.106} x2={8.841} y1={21.746} y2={15.273} gradientUnits="userSpaceOnUse">
					<stop offset={0.18} stopColor="#0052CC" />
					<stop offset={1} stopColor="#2684FF" />
				</linearGradient>
				<linearGradient id="prefix__b" x1={3.892} x2={15.159} y1={2.264} y2={8.74} gradientUnits="userSpaceOnUse">
					<stop offset={0.18} stopColor="#0052CC" />
					<stop offset={1} stopColor="#2684FF" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoAtlassianConfluenceColor.iconName = "logo-atlassian-confluence--color";

export default IconLogoAtlassianConfluenceColor;
