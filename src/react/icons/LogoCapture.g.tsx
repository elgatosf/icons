import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCapture = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6.833 6.82c0-.223.244-.364.438-.252l2.042 1.18a.292.292 0 0 1 0 .504L7.27 9.431a.292.292 0 0 1-.438-.252z" />
					<path
						fillRule="evenodd"
						d="M11.5 1A3.5 3.5 0 0 1 15 4.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 1 11.5v-7A3.5 3.5 0 0 1 4.5 1zM3.77 9.75a.44.44 0 0 0-.437.438v.729c0 .966.784 1.75 1.75 1.75h.73a.438.438 0 0 0 0-.875h-.73a.875.875 0 0 1-.875-.875v-.73a.437.437 0 0 0-.437-.437m8.46 0a.437.437 0 0 0-.438.438v.729a.875.875 0 0 1-.875.875h-.73a.437.437 0 1 0 0 .875h.73a1.75 1.75 0 0 0 1.75-1.75v-.73a.44.44 0 0 0-.438-.437M7.634 5.771a1.167 1.167 0 0 0-1.674.967l-.003.083v2.358l.003.083a1.167 1.167 0 0 0 1.747.927L9.75 9.01a1.167 1.167 0 0 0 0-2.02L7.708 5.81zM5.083 3.333a1.75 1.75 0 0 0-1.75 1.75v.73a.438.438 0 0 0 .875 0v-.73c0-.483.392-.875.875-.875h.73a.437.437 0 1 0 0-.875zm5.105 0a.438.438 0 0 0 0 .875h.729c.483 0 .875.392.875.875v.73a.437.437 0 1 0 .875 0v-.73a1.75 1.75 0 0 0-1.75-1.75z"
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
					<path d="M8.667 8.652c0-.256.278-.416.5-.288L11.5 9.71a.333.333 0 0 1 0 .577l-2.333 1.347a.333.333 0 0 1-.5-.288z" />
					<path
						fillRule="evenodd"
						d="M14 2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM5.167 12a.5.5 0 0 0-.5.5v.833a2 2 0 0 0 2 2H7.5a.5.5 0 1 0 0-1h-.833a1 1 0 0 1-1-1V12.5a.5.5 0 0 0-.5-.5m9.666 0a.5.5 0 0 0-.5.5v.833a1 1 0 0 1-1 1H12.5a.5.5 0 0 0 0 1h.833a2 2 0 0 0 2-2V12.5a.5.5 0 0 0-.5-.5m-5.25-4.547A1.334 1.334 0 0 0 7.67 8.557l-.003.095v2.695l.003.095a1.333 1.333 0 0 0 1.997 1.06L12 11.153a1.333 1.333 0 0 0 0-2.309L9.667 7.498zM6.667 4.667a2 2 0 0 0-2 2V7.5a.5.5 0 1 0 1 0v-.833a1 1 0 0 1 1-1H7.5a.5.5 0 0 0 0-1zm5.833 0a.5.5 0 0 0 0 1h.833a1 1 0 0 1 1 1V7.5a.5.5 0 0 0 1 0v-.833a2 2 0 0 0-2-2z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoCapture.iconName = "logo-capture";

export default IconLogoCapture;
