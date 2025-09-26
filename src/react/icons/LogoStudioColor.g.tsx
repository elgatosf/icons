import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStudioColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path fill="url(#prefix__a)" d="M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" />
					<path
						fill="#fff"
						d="M5.957 14.5c.345 0 .625.28.625.625v1.042c0 .69.56 1.25 1.25 1.25h1.042a.625.625 0 1 1 0 1.25H7.832a2.5 2.5 0 0 1-2.5-2.5v-1.042c0-.345.28-.625.625-.625M18.04 14.5c.346 0 .625.28.625.625v1.042a2.5 2.5 0 0 1-2.5 2.5h-1.041a.625.625 0 1 1 0-1.25h1.041c.69 0 1.25-.56 1.25-1.25v-1.042c0-.345.28-.625.625-.625"
					/>
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M9.086 10.197a1.667 1.667 0 0 1 2.391-1.38l.105.056 2.917 1.683a1.667 1.667 0 0 1 0 2.887l-2.917 1.684a1.667 1.667 0 0 1-2.496-1.324l-.004-.12v-3.367zm1.871-.242a.417.417 0 0 0-.625.36v3.369c0 .32.347.52.625.36l2.917-1.683a.417.417 0 0 0 0-.722z"
						clipRule="evenodd"
					/>
					<path
						fill="#fff"
						d="M8.874 5.333a.625.625 0 0 1 0 1.25H7.832c-.69 0-1.25.56-1.25 1.25v1.042a.625.625 0 1 1-1.25 0V7.833a2.5 2.5 0 0 1 2.5-2.5zM16.165 5.333a2.5 2.5 0 0 1 2.5 2.5v1.042a.625.625 0 0 1-1.25 0V7.833c0-.69-.56-1.25-1.25-1.25h-1.041a.625.625 0 1 1 0-1.25z"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={2} x2={22} y1={2} y2={22} gradientUnits="userSpaceOnUse">
							<stop stopColor="#FF3C4E" />
							<stop offset={1} stopColor="#E845BA" />
						</linearGradient>
					</defs>
				</svg>
			);
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
						d="M3.77 9.75c.241 0 .437.196.437.438v.729c0 .483.392.875.875.875h.73a.438.438 0 0 1 0 .875h-.73a1.75 1.75 0 0 1-1.75-1.75v-.73c0-.241.196-.437.438-.437M12.228 9.75c.242 0 .437.196.437.438v.729a1.75 1.75 0 0 1-1.75 1.75h-.729a.438.438 0 0 1 0-.875h.73a.875.875 0 0 0 .874-.875v-.73c0-.241.196-.437.438-.437"
					/>
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M5.96 6.738a1.167 1.167 0 0 1 1.674-.966l.073.039 2.042 1.178a1.167 1.167 0 0 1 0 2.021L7.707 10.19a1.167 1.167 0 0 1-1.747-.927l-.003-.083V6.82zm1.31-.17a.292.292 0 0 0-.438.253v2.358c0 .224.243.364.438.252L9.31 8.252a.292.292 0 0 0 0-.505z"
						clipRule="evenodd"
					/>
					<path
						fill="#fff"
						d="M5.811 3.333a.438.438 0 0 1 0 .875h-.729a.875.875 0 0 0-.875.875v.73a.437.437 0 1 1-.875 0v-.73c0-.966.784-1.75 1.75-1.75zM10.915 3.333c.967 0 1.75.784 1.75 1.75v.73a.438.438 0 0 1-.875 0v-.73a.875.875 0 0 0-.875-.875h-.729a.437.437 0 1 1 0-.875z"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={1} x2={15} y1={1} y2={15} gradientUnits="userSpaceOnUse">
							<stop stopColor="#FF3C4E" />
							<stop offset={1} stopColor="#E845BA" />
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
						d="M5.166 12a.5.5 0 0 1 .5.5v.833a1 1 0 0 0 1 1h.833a.5.5 0 0 1 0 1h-.833a2 2 0 0 1-2-2V12.5a.5.5 0 0 1 .5-.5M14.833 12a.5.5 0 0 1 .5.5v.833a2 2 0 0 1-2 2h-.834a.5.5 0 1 1 0-1h.834a1 1 0 0 0 1-1V12.5a.5.5 0 0 1 .5-.5"
					/>
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M7.67 8.557a1.334 1.334 0 0 1 1.912-1.104l.084.045 2.333 1.347a1.333 1.333 0 0 1 0 2.31L9.666 12.5a1.333 1.333 0 0 1-1.997-1.059l-.003-.095V8.652zm1.496-.193a.333.333 0 0 0-.5.288v2.695c0 .257.278.417.5.289l2.333-1.347a.333.333 0 0 0 0-.578z"
						clipRule="evenodd"
					/>
					<path
						fill="#fff"
						d="M7.5 4.667a.5.5 0 0 1 0 1h-.834a1 1 0 0 0-1 1V7.5a.5.5 0 0 1-1 0v-.833a2 2 0 0 1 2-2zM13.333 4.667a2 2 0 0 1 2 2V7.5a.5.5 0 0 1-1 0v-.833a1 1 0 0 0-1-1h-.834a.5.5 0 0 1 0-1z"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={2} x2={18} y1={2} y2={18} gradientUnits="userSpaceOnUse">
							<stop stopColor="#FF3C4E" />
							<stop offset={1} stopColor="#E845BA" />
						</linearGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoStudioColor.iconName = "logo-studio--color";

export default IconLogoStudioColor;
