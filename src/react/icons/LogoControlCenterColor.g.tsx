import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoControlCenterColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fill="url(#prefix__a)"
						d="M1 4.5A3.5 3.5 0 0 1 4.5 1h7A3.5 3.5 0 0 1 15 4.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 1 11.5z"
					/>
					<path
						fill="#fff"
						d="M8 11.208c.242 0 .438.196.438.438v1.166a.438.438 0 0 1-.876 0v-1.166c0-.242.196-.438.438-.438M5.112 10.268a.438.438 0 0 1 .619.62l-.825.825a.438.438 0 0 1-.618-.62zM10.268 10.268c.171-.17.448-.17.619 0l.825.826a.437.437 0 0 1-.619.619l-.825-.825a.44.44 0 0 1 0-.62"
					/>
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M8 5.958c.977 0 1.793.687 1.994 1.604h2.819a.438.438 0 0 1 0 .875h-2.82a2.042 2.042 0 0 1-3.987 0H3.188a.438.438 0 0 1 0-.874h2.818A2.04 2.04 0 0 1 8 5.958m0 .875a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334"
						clipRule="evenodd"
					/>
					<path
						fill="#fff"
						d="M4.288 4.288c.17-.171.447-.171.618 0l.825.824a.438.438 0 0 1-.619.62l-.824-.826a.44.44 0 0 1 0-.618M11.093 4.288a.438.438 0 0 1 .619.618l-.825.826a.438.438 0 0 1-.619-.62zM8 2.75c.242 0 .438.196.438.438v1.166a.438.438 0 0 1-.876 0V3.188c0-.242.196-.438.438-.438"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={1} x2={15} y1={1} y2={15} gradientUnits="userSpaceOnUse">
							<stop stopColor="#FB7900" />
							<stop offset={1} stopColor="#E5C700" />
						</linearGradient>
					</defs>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path fill="url(#prefix__a)" d="M2 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
					<path
						fill="#fff"
						d="M10 13.667a.5.5 0 0 1 .5.5V15.5a.5.5 0 0 1-1 0v-1.333a.5.5 0 0 1 .5-.5M6.7 12.592a.5.5 0 0 1 .707.708l-.943.943a.5.5 0 0 1-.707-.707zM12.592 12.592a.5.5 0 0 1 .707 0l.943.944a.5.5 0 0 1-.707.707l-.943-.943a.5.5 0 0 1 0-.708"
					/>
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M10 7.667c1.117 0 2.05.785 2.279 1.833H15.5a.5.5 0 0 1 0 1h-3.221a2.333 2.333 0 0 1-4.558 0H4.5a.5.5 0 0 1 0-1h3.221A2.33 2.33 0 0 1 10 7.667m0 1a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666"
						clipRule="evenodd"
					/>
					<path
						fill="#fff"
						d="M5.757 5.757a.5.5 0 0 1 .707 0l.943.943a.5.5 0 0 1-.707.708l-.943-.944a.5.5 0 0 1 0-.707M13.535 5.757a.5.5 0 0 1 .707.707l-.943.944a.5.5 0 0 1-.707-.708zM10 4a.5.5 0 0 1 .5.5v1.333a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 10 4"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={2} x2={18} y1={2} y2={18} gradientUnits="userSpaceOnUse">
							<stop stopColor="#FB7900" />
							<stop offset={1} stopColor="#E5C700" />
						</linearGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoControlCenterColor.iconName = "logo-control-center--color";

export default IconLogoControlCenterColor;
