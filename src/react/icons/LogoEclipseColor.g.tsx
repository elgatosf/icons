import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoEclipseColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#2C2255"
				d="M7.197 14.76H3.92q.651 2.234 2.418 4.001 2.818 2.819 6.78 2.818.792-.001 1.537-.114 2.986-.449 5.225-2.704 1.78-1.767 2.435-4H7.197M5.39 10.31H3.678q-.094.563-.124 1.154h19.128999999999998a10 10 0 0 0-.125-1.154M3.554 12.535q.03.59.124 1.154h18.88q.095-.563.125-1.154M22.315 9.239Q21.66 7 19.88 5.219q-2.234-2.232-5.21-2.682a10 10 0 0 0-1.552-.116q-3.963 0-6.78 2.799Q4.568 7 3.918 9.239"
			/>
			<path
				fill="#F7941E"
				d="M2.985 12c0-5.053 3.795-9.252 8.732-9.99Q11.534 2 11.347 2C5.808 2 1.316 6.477 1.316 12s4.492 10 10.033 10q.186-.001.37-.01C6.78 21.253 2.985 17.055 2.985 12"
			/>
			<path fill="url(#prefix__a)" d="M19.629 11.464a6.5 6.5 0 0 0-.199-1.154H6.807q-.15.559-.198 1.154z" />
			<path fill="url(#prefix__b)" d="M19.628 12.536H6.608q.05.593.199 1.153H19.43q.15-.56.198-1.153" />
			<path fill="url(#prefix__c)" d="M13.119 18.534a6.53 6.53 0 0 0 5.922-3.773H7.197a6.53 6.53 0 0 0 5.922 3.773" />
			<path
				fill="#fff"
				d="M5.644 12.536H22.67a10 10 0 0 0-.003-1.072H3.554a10 10 0 0 0-.003 1.072zM7.159 9.239h-3.24a9 9 0 0 0-.24 1.072h18.818a10 10 0 0 0-.257-1.072M21.267 13.69H3.68c.064.364.137.721.242 1.07h18.381999999999998a10 10 0 0 0 .253-1.07z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={13.119} x2={13.119} y1={22.879} y2={8.47} gradientUnits="userSpaceOnUse">
					<stop offset={0.303} stopColor="#473788" />
					<stop offset={0.872} stopColor="#2C2255" />
				</linearGradient>
				<linearGradient id="prefix__b" x1={13.119} x2={13.119} y1={22.879} y2={8.47} gradientUnits="userSpaceOnUse">
					<stop offset={0.303} stopColor="#473788" />
					<stop offset={0.872} stopColor="#2C2255" />
				</linearGradient>
				<linearGradient id="prefix__c" x1={13.119} x2={13.119} y1={22.879} y2={8.471} gradientUnits="userSpaceOnUse">
					<stop offset={0.303} stopColor="#473788" />
					<stop offset={0.863} stopColor="#2C2255" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoEclipseColor.iconName = "logo-eclipse--color";

export default IconLogoEclipseColor;
