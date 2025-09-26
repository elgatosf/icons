import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWaveLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M11.5 1A3.5 3.5 0 0 1 15 4.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 1 11.5v-7A3.5 3.5 0 0 1 4.5 1zM8 3.333a.44.44 0 0 0-.437.438v8.458a.438.438 0 0 0 .875 0V3.771A.44.44 0 0 0 8 3.333m-4.23 1.75a.44.44 0 0 0-.437.438v4.958a.438.438 0 0 0 .875 0V5.521a.437.437 0 0 0-.437-.438m6.345 0a.44.44 0 0 0-.438.438v4.958a.438.438 0 0 0 .875 0V5.521a.44.44 0 0 0-.437-.438m-4.23 1.75a.437.437 0 0 0-.437.438v1.458a.437.437 0 1 0 .875 0V7.271a.44.44 0 0 0-.438-.438m6.344 0a.437.437 0 0 0-.437.438v1.458a.437.437 0 1 0 .875 0V7.271a.44.44 0 0 0-.438-.438"
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
					<path
						fillRule="evenodd"
						d="M14 2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-4 2.667a.5.5 0 0 0-.5.5v9.666a.5.5 0 1 0 1 0V5.167a.5.5 0 0 0-.5-.5m-4.833 2a.5.5 0 0 0-.5.5v5.666a.5.5 0 1 0 1 0V7.167a.5.5 0 0 0-.5-.5m7.25 0a.5.5 0 0 0-.5.5v5.666a.5.5 0 1 0 1 0V7.167a.5.5 0 0 0-.5-.5m-4.834 2a.5.5 0 0 0-.5.5v1.666a.5.5 0 1 0 1 0V9.167a.5.5 0 0 0-.5-.5m7.25 0a.5.5 0 0 0-.5.5v1.666a.5.5 0 1 0 1 0V9.167a.5.5 0 0 0-.5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoWaveLink.iconName = "logo-wave-link";

export default IconLogoWaveLink;
