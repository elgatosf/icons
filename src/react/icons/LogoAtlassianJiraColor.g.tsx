import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAtlassianJiraColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#2684FF"
				d="M20.226 3h-8.931c0 2.156 1.807 3.911 4.027 3.911h1.651v1.53c0 2.155 1.807 3.91 4.027 3.91V3.752c0-.426-.335-.752-.774-.752"
			/>
			<path
				fill="url(#prefix__a)"
				d="M15.814 7.312H6.883c0 2.156 1.807 3.91 4.026 3.91h1.652v1.555c0 2.156 1.807 3.911 4.027 3.911V8.064a.766.766 0 0 0-.774-.752"
			/>
			<path
				fill="url(#prefix__b)"
				d="M11.4 11.65H2.469c0 2.155 1.807 3.91 4.026 3.91h1.652v1.53c0 2.155 1.807 3.91 4.027 3.91v-8.599c0-.426-.361-.752-.774-.752"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={16.664} x2={12.98} y1={7.334} y2={11.244} gradientUnits="userSpaceOnUse">
					<stop offset={0.176} stopColor="#0052CC" />
					<stop offset={1} stopColor="#2684FF" />
				</linearGradient>
				<linearGradient id="prefix__b" x1={12.498} x2={8.232} y1={11.678} y2={15.951} gradientUnits="userSpaceOnUse">
					<stop offset={0.176} stopColor="#0052CC" />
					<stop offset={1} stopColor="#2684FF" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoAtlassianJiraColor.iconName = "logo-atlassian-jira--color";

export default IconLogoAtlassianJiraColor;
