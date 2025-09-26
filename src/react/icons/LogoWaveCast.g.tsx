import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWaveCast = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M11.5 1A3.5 3.5 0 0 1 15 4.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 1 11.5v-7A3.5 3.5 0 0 1 4.5 1zM5.91 5.375a.44.44 0 0 0-.438.438v6.416a.438.438 0 0 0 .875 0V5.813a.437.437 0 0 0-.438-.438m-.827-2.042a1.75 1.75 0 0 0-1.75 1.75v1.313a.437.437 0 1 0 .875 0V5.083c0-.483.392-.875.875-.875h5.834c.483 0 .875.392.875.875v5.834a.875.875 0 0 1-.875.875H9.604a.437.437 0 1 0 0 .875h1.313a1.75 1.75 0 0 0 1.75-1.75V5.083a1.75 1.75 0 0 0-1.75-1.75zm2.965 3.209a.437.437 0 0 0-.438.437v4.084a.438.438 0 0 0 .875 0V6.979a.437.437 0 0 0-.437-.437M3.77 8a.44.44 0 0 0-.438.438v1.166a.438.438 0 0 0 .875 0V8.438A.437.437 0 0 0 3.771 8m6.415 0a.44.44 0 0 0-.437.438v1.166a.438.438 0 0 0 .875 0V8.438A.44.44 0 0 0 10.186 8"
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
						d="M14 2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM7.61 7a.5.5 0 0 0-.5.5v7.333a.5.5 0 1 0 1 0V7.5a.5.5 0 0 0-.5-.5m-.943-2.333a2 2 0 0 0-2 2v1.5a.5.5 0 1 0 1 0v-1.5a1 1 0 0 1 1-1h6.666a1 1 0 0 1 1 1v6.666a1 1 0 0 1-1 1h-1.5a.5.5 0 0 0 0 1h1.5a2 2 0 0 0 2-2V6.667a2 2 0 0 0-2-2zm3.388 3.666a.5.5 0 0 0-.5.5V13.5a.5.5 0 0 0 1 0V8.833a.5.5 0 0 0-.5-.5M5.167 10a.5.5 0 0 0-.5.5v1.333a.5.5 0 1 0 1 0V10.5a.5.5 0 0 0-.5-.5m7.332 0a.5.5 0 0 0-.5.5v1.333a.5.5 0 1 0 1 0V10.5a.5.5 0 0 0-.5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoWaveCast.iconName = "logo-wave-cast";

export default IconLogoWaveCast;
