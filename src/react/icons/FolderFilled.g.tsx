import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M4 21H20C21.1046 21 22 20.1046 22 19V9.5H2V19C2 20.1046 2.89543 21 4 21Z" />
					<path d="M2 8V5C2 3.89543 2.89543 3 4 3H9.075C9.58855 3 10.0824 3.19755 10.4543 3.55172L12.3552 5.36207C12.4481 5.45061 12.5716 5.5 12.7 5.5H20C21.1046 5.5 22 6.39543 22 7.5V8H2Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M4 17H16C17.1046 17 18 16.1046 18 15V8H2V15C2 16.1046 2.89543 17 4 17Z" />
					<path d="M2 7V5C2 3.89543 2.89543 3 4 3H7.67157C8.20201 3 8.71071 3.21071 9.08579 3.58579L10.2071 4.70711C10.3946 4.89464 10.649 5 10.9142 5H16C17.1046 5 18 5.89543 18 7H2Z" />
				</svg>
			);
	}
};

IconFolderFilled.iconName = "folder--filled";

export default IconFolderFilled;
