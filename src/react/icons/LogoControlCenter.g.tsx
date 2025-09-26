import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoControlCenter = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M8 6.833a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334" />
					<path
						fillRule="evenodd"
						d="M11.5 1A3.5 3.5 0 0 1 15 4.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 1 11.5v-7A3.5 3.5 0 0 1 4.5 1zM8 11.208a.44.44 0 0 0-.437.438v1.166a.438.438 0 0 0 .875 0v-1.166A.44.44 0 0 0 8 11.208m-2.269-.94a.44.44 0 0 0-.619 0l-.824.826a.438.438 0 0 0 .618.619l.825-.825a.44.44 0 0 0 0-.62m5.156 0a.438.438 0 0 0-.619.62l.825.825a.438.438 0 0 0 .619-.62zM8 5.958c-.977 0-1.793.687-1.994 1.604H3.188a.438.438 0 0 0 0 .875h2.818a2.042 2.042 0 0 0 3.988 0h2.819a.438.438 0 0 0 0-.874h-2.82A2.04 2.04 0 0 0 8 5.958m-3.094-1.67a.438.438 0 0 0-.618.618l.824.826a.438.438 0 0 0 .619-.62zm6.806 0a.44.44 0 0 0-.619 0l-.825.824a.438.438 0 0 0 .619.62l.825-.826a.437.437 0 0 0 0-.618M8 2.75a.44.44 0 0 0-.437.438v1.166a.438.438 0 0 0 .875 0V3.188A.44.44 0 0 0 8 2.75"
						clipRule="evenodd"
					/>
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
					<path d="M10 8.667a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666" />
					<path
						fillRule="evenodd"
						d="M14 2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-4 11.667a.5.5 0 0 0-.5.5V15.5a.5.5 0 0 0 1 0v-1.333a.5.5 0 0 0-.5-.5m-2.593-1.075a.5.5 0 0 0-.707 0l-.943.944a.5.5 0 0 0 .707.707l.943-.943a.5.5 0 0 0 0-.708m5.893 0a.5.5 0 0 0-.708.708l.943.943a.5.5 0 0 0 .707-.707zM10 7.667c-1.117 0-2.05.785-2.279 1.833H4.5a.5.5 0 0 0 0 1h3.221a2.333 2.333 0 0 0 4.558 0H15.5a.5.5 0 0 0 0-1h-3.221A2.33 2.33 0 0 0 10 7.667m-3.536-1.91a.5.5 0 0 0-.707.707l.943.944a.5.5 0 0 0 .707-.708zm7.778 0a.5.5 0 0 0-.707 0l-.943.943a.5.5 0 0 0 .707.708l.943-.944a.5.5 0 0 0 0-.707M10 4a.5.5 0 0 0-.5.5v1.333a.5.5 0 1 0 1 0V4.5A.5.5 0 0 0 10 4"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoControlCenter.iconName = "logo-control-center";

export default IconLogoControlCenter;
